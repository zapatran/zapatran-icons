import * as React from 'react';

function SvgMenuAlt2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 6h16M4 12h16M4 18h7" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default SvgMenuAlt2;
