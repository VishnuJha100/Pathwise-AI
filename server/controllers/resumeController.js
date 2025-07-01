import pdfParse from "pdf-parse";
import User from "../models/User.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const uploadResume = async (req, res) => {
  try {
    const pdfBuffer = req.file.buffer;
    const text = await pdfParse(pdfBuffer);

    const model = genAI.getGenerativeModel({ model: "" });

    const prompt = `
            You are an AI assistant that extracts only technical skills from resumes.
            Here is the resume text:
            "${text}"
            Return a **clean comma-separated list** of only technical skills like Javascript, MongoDB, Tailwind, etc. No soft skills.
        `;

    const result = await model.generateContent(prompt);
    const response = await result.response.text;

    const skills = response
      .split(/,|\n|•|-/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => s.replace(/[^a-zA-Z0-9.+#]/g, ""));

    const finalSkills = [...new Set(skills)];

    const userId = req.userId || "replace_later";
    await User.findByIdAndUpdate(userId, { skills: finalSkills });

    res.status(200).json({ extractedSkills: finalSkills });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Skill extraction failed", error: error.message})
  }
};
