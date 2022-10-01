import * as React from 'react';

function SvgMinusSm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" fill="#374151" />
    </svg>
  );
}

export default SvgMinusSm;
