const ReporterSelect = ({ value, onChange }) => {
  const reporters = [
    { id: "1", name: "Anmol Phad" },
    { id: "2", name: "Rahul Kumar" },
    { id: "3", name: "Amit Sharma" },
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        h-11
        px-4
        rounded
        border
        border-[#DFE1E6]
        text-[15px]
        text-[#172B4D]
        bg-white
        focus:outline-none
        focus:border-[#4C9AFF]
      "
    >
      {reporters.map((reporter) => (
        <option key={reporter.id} value={reporter.id}>
          {reporter.name}
        </option>
      ))}
    </select>
  );
};

export default ReporterSelect;