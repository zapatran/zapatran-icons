import * as React from 'react';

function SvgClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#4A5568"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgClock;
