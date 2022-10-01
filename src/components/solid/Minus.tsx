import * as React from 'react';

function SvgMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fill="#374151" />
    </svg>
  );
}

export default SvgMinus;
