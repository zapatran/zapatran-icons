import * as React from 'react';

function SvgChevronDoubleLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        stroke="#374151"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgChevronDoubleLeft;
