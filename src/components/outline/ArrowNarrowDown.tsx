import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowNarrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m16 17-4 4m0 0-4-4m4 4V3" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgArrowNarrowDown;
