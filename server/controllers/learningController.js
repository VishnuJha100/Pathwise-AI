import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateLearningPath = async (req, res) => {
  try {
    const { skills } = req.body;

    if (!skills || !skills.length)
      return res.status(400).json({ message: "Missing skills required" });

    const model = genAI.getGenerativeModel({ model: "" });

    const prompt = `
      You're an expert coding mentor. For each of the following skills:
      ${skills.join(", ")},
      provide:
      1. A short description
      2. Free resource links (YouTube, docs, freeCodeCamp, etc.)
      3. A simple project idea to practice
      Format the response in a JSON-like list per skill.
    `;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    res.status(200).json({ roadmap: output });
  } catch (error) {
    res.status(500).json({ message: "Learning path generation failed", error: err.message });
  }
};
