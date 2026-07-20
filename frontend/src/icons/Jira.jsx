const Jira = ({ size = 28, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M11.76 2L6.15 7.61L9.64 11.1L15.25 5.49L11.76 2Z" />
      <path
        d="M17.85 8.1L12.24 13.71L15.73 17.2L21.34 11.59L17.85 8.1Z"
        opacity=".8"
      />
      <path
        d="M9.64 11.1L12.24 13.71L8.75 17.2L5.26 13.71L9.64 11.1Z"
        opacity=".6"
      />
    </svg>
  );
};

export default Jira;
