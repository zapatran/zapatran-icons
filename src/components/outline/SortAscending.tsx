import * as React from 'react';
import { SVGProps } from 'react';

const SvgSortAscending = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 4h13M3 8h9m-9 4h6m4 0 4-4m0 0 4 4m-4-4v12"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSortAscending;
