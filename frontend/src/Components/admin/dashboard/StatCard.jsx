import {
  MdFolder,
  MdPeople,
  MdBugReport,
  MdCheckCircle,
} from "react-icons/md";

const icons = {
  Projects: <MdFolder size={28} />,
  Users: <MdPeople size={28} />,
  "Open Issues": <MdBugReport size={28} />,
  Resolved: <MdCheckCircle size={28} />,
};

const StatCard = ({ title, value, color }) => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border
        border-gray-200
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
        p-6
      "
    >
      <div className="flex justify-between items-center">

        <div>
          <p className="text-sm font-medium text-[#5E6C84]">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-[#172B4D] mt-3">
            {value}
          </h2>
        </div>

        <div
          className={`
            w-14
            h-14
            rounded-xl
            ${color}
            flex
            items-center
            justify-center
            text-white
            shadow-md
          `}
        >
          {icons[title]}
        </div>

      </div>
    </div>
  );
};

export default StatCard;