import * as React from 'react';

function SvgSortDescending(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
        stroke="#4A5568"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSortDescending;
