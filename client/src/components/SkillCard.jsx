const SkillCard = ({ skill, onUpdate }) => {
  const statuses = ["learning", "in-progress", "mastered"];
  return (
    <div className="bg-white rounded p-3 shadow-md flex justify-between items-center">
      <span className="font-medium">{skill.name}</span>
      <select
        value={skill.status}
        onChange={(e) => onUpdate(skill.name, e.target.value)}
        className="border p-1"
      >
        {statuses.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
};
