import * as React from 'react';
import { SVGProps } from 'react';

const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#374151"
    />
    <path
      d="M3 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.05a2.5 2.5 0 0 1 4.9 0H10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3ZM14 7a1 1 0 0 0-1 1v6.05A2.5 2.5 0 0 1 15.95 16H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-.293-.707l-2-2A1 1 0 0 0 15 7h-1Z"
      fill="#374151"
    />
  </svg>
);

export default SvgTruck;
