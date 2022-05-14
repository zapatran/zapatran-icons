import * as React from 'react';
import { SVGProps } from 'react';

const SvgSortDescending = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0-4-4m4 4 4-4"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSortDescending;
