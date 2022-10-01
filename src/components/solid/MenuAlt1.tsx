import * as React from 'react';

function SvgMenuAlt1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        fill="#4A5568"
      />
    </svg>
  );
}

export default SvgMenuAlt1;
