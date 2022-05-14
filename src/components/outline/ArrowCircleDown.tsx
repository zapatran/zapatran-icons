import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m15 13-3 3m0 0-3-3m3 3V8m0 13a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowCircleDown;
