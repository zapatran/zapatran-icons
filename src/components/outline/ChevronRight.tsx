import * as React from 'react';

function SvgChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 5l7 7-7 7" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default SvgChevronRight;
