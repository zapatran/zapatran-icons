import * as React from 'react';

function SvgArrowSmUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 11l5-5m0 0l5 5m-5-5v12"
        stroke="#111827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgArrowSmUp;
