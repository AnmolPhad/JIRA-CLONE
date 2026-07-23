import { useEffect } from "react";
import { X } from "lucide-react";
import IssueForm from "./IssueForm";

const CreateIssue = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[999]
        bg-[rgba(9,30,66,0.54)]
        flex
        items-start
        justify-center
        overflow-y-auto
        
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-[910px]
          max-w-[75vw]
          bg-white
          rounded
          shadow-2xl
          px-8
          pt-4
          pb-9
          
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-6
            right-6
            p-2
            rounded
            hover:bg-gray-100
          "
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h1 className="text-[24px]
font-normal
tracking-tight text-[#172B4D] mb-1 ">
          Create Issue
        </h1>

        <IssueForm onClose={onClose} />
      </div>
    </div>
  );
};

export default CreateIssue;