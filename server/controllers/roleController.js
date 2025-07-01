import User from "../models/User.js";
import { predefinedRoles } from "../data/roles.js";

export const matchRoles = async (req, res) => {
    try {
        const userId = req.userId || "replace later";
        const user = await User.findById(userId);
        if(!user)
            return res.status(404).json({ message: "User not found" });

        const userSkills = user.skills.map(skill => skill.toLowerCase());

        const matches = [];

        for (const role of predefinedRoles) {
            const required = role.requiredSkills.map(s => s.toLowerCase());
            const matched = required.filter(skill => userSkills.includes(skill));
            const matchPercent = Math.round((matched.length/required.length) * 100);

            matches.push({
                role: role.name,
                matchPercent,
                matchedSkills: matched,
                missingSkills: required.filter(s => !userSkills.includes(s))
            });
        }

        matches.sort((a, b) => b.matchPercent - a.matchPercent);

        res.status(200).json({ roles: matches });
    } catch (error) {
        res.status(500).json({ message: "Matching Failed", error: error.message });
    }
}