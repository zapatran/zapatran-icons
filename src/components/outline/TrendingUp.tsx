import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrendingUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTrendingUp;
