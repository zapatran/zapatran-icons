import * as React from 'react';

function SvgArrowSmRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13 7l5 5m0 0l-5 5m5-5H6"
        stroke="#111827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgArrowSmRight;
