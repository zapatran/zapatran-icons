import * as React from 'react';
import { SVGProps } from 'react';

const SvgRewind = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.066 11.2a1 1 0 0 0 0 1.6l5.334 4A1 1 0 0 0 19 16V8a1 1 0 0 0-1.6-.8l-5.333 4ZM4.066 11.2a1 1 0 0 0 0 1.6l5.334 4A1 1 0 0 0 11 16V8a1 1 0 0 0-1.6-.8l-5.334 4Z"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgRewind;
