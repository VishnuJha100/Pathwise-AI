const LearningPathCard = ({ text }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow overflow-auto whitespace-pre-wrap text-sm">
      <pre>{text}</pre>
    </div>
  );
};

export default LearningPathCard;
