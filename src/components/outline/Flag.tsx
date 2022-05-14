import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 21v-4m0 0V5a2 2 0 0 1 2-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 0 0-2 2Zm9-13.5V9"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgFlag;
