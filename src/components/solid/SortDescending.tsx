import * as React from 'react';
import { SVGProps } from 'react';

const SvgSortDescending = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 3a1 1 0 0 0 0 2h11a1 1 0 1 0 0-2H3ZM3 7a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2H3ZM3 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H3ZM15 8a1 1 0 1 0-2 0v5.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L15 13.586V8Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgSortDescending;
