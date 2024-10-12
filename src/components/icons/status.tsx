const StatusIcon = ({ status }: any) => {
  switch (status) {
    case "pending":
      return (
        <svg
          role="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#B0BEC5"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="12"
            y1="8"
            x2="12"
            y2="12"
            stroke="#B0BEC5"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="12"
            x2="14.5"
            y2="12"
            stroke="#B0BEC5"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "in-progress":
      return (
        <svg
          role="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#2196F3"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="12"
            y1="8"
            x2="12"
            y2="12"
            stroke="#2196F3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="12"
            x2="14"
            y2="14"
            stroke="#2196F3"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "completed":
      return (
        <svg
          role="icon"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#4CAF50" />
          <path
            d="M9 12.5L11 14.5L15 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default StatusIcon;
