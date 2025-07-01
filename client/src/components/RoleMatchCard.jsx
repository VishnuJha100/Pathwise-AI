const RoleMatchCard = ({ role }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      <h3 className="text-xl font-bold">{role.role}</h3>
      <p className="text-green-600 font-medium">Match: {role.matchPercent}%</p>

      <div className="mt-2">
        <strong>Matched Skills:</strong> {role.matchedSkills.join(", ")}
      </div>
      <div>
        <strong>Missing Skills:</strong> {role.missingSkills.join(", ")}
      </div>
    </div>
  );
};

export default RoleMatchCard;
