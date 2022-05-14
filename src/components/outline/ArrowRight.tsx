import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m14 5 7 7m0 0-7 7m7-7H3" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgArrowRight;
