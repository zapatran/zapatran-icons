import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowSmRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m13 7 5 5m0 0-5 5m5-5H6" stroke="#111827" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgArrowSmRight;
