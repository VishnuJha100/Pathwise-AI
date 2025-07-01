import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
});

export const registerUser = (userData) => API.post("/auth/register", userData);
export const loginUser = (userData) => API.post("/auth/login", userData);

export const fetchRoles = () => API.get("/roles/match");
export const getLearningPath = (skills) => API.post("/learning/roadmap", { skills });
export const updateSkillStatus = (skillName, status) => API.post("/progress/update", { skillName, status });
