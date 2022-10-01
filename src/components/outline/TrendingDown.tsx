import * as React from 'react';

function SvgTrendingDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        stroke="#4A5568"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTrendingDown;
