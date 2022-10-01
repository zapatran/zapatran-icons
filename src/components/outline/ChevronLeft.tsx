import * as React from 'react';

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 19l-7-7 7-7" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default SvgChevronLeft;
