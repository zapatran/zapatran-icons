import * as React from 'react';

function SvgChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        fill="#4A5568"
      />
    </svg>
  );
}

export default SvgChevronDown;
