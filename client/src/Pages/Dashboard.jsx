import { useEffect, useState } from "react";
import { fetchRoles, getLearningPath } from "../utils/api";
import RoleMatchCard from "../components/RoleMatchCard";
import LearningPathCard from "../components/LearningPathCard";

const Dashboard = () => {
  const [roles, setRoles] = useState([]);
  const [learningPath, setLearningPath] = useState("");

  useEffect(() => {
    const loadRoles = async () => {
      const res = await fetchRoles();
      setRoles(res.data.roles);

      const missingSkills = res.data.roles[0]?.missingSkills || [];
      if (missingSkills.length) {
        const roadmap = await getLearningPath(missingSkills);
        setLearningPath(roadmap.data.roadmap);
      }
    };
    loadRoles();
  }, []);

  return (
    <div className="p-6 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">🎯 Role Matching Results</h1>
      {roles.map((role, idx) => (
        <RoleMatchCard key={idx} role={role} />
      ))}

      {learningPath && (
        <div>
          <h2 className="text-2xl font-semibold mt-10">📚 Learning Path</h2>
          <LearningPathCard text={learningPath} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
