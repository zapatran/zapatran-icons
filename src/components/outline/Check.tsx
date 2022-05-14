import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m5 13 4 4L19 7" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgCheck;
