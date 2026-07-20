const Kanban = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="4" width="6" height="16" rx="1" />
    <rect x="15" y="4" width="6" height="10" rx="1" />
    <rect x="15" y="16" width="6" height="4" rx="1" />
  </svg>
);

export default Kanban;
