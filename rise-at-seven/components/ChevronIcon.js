import React from "react";

const ChevronIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 12 8"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="round"
      stroke="currentColor"
      width={12}
      height={8}
    >
      <polyline points="1,2 6,7 11,2" />
    </svg>
  );
};

export default ChevronIcon;
