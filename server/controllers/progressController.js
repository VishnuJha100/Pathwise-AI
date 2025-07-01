import User from "../models/User.js";

export const updateSkillStatus = async (req, res) => {
  const { skillName, status } = req.body;
  const userId = req.userId || "replace_later";

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const skillIndex = user.skills.findIndex(s => s.name === skillName);
    if (skillIndex === -1) return res.status(404).json({ message: "Skill not found" });

    user.skills[skillIndex].status = status;
    await user.save();

    res.status(200).json({ message: "Status updated", skills: user.skills });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};
