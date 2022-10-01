import * as React from 'react';

function SvgShoppingBag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        stroke="#374151"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgShoppingBag;
