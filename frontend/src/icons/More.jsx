const More = ({ size = 18, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      viewBox="0 0 24 24"
    >
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
};

export default More;
