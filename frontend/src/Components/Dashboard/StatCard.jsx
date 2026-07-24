const StatCard = ({ title, value, color }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md border-t-4 ${color} p-5`}
    >
      <p className="text-gray-500 text-sm font-medium">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-[#172B4D] mt-3">
        {value}
      </h2>
    </div>
  );
};

export default StatCard;