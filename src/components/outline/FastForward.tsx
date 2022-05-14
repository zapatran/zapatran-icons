import * as React from 'react';
import { SVGProps } from 'react';

const SvgFastForward = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.933 12.8a1 1 0 0 0 0-1.6L6.6 7.2A1 1 0 0 0 5 8v8a1 1 0 0 0 1.6.8l5.333-4ZM19.933 12.8a1 1 0 0 0 0-1.6l-5.333-4A1 1 0 0 0 13 8v8a1 1 0 0 0 1.6.8l5.333-4Z"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgFastForward;
