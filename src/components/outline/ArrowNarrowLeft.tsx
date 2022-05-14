import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowNarrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m7 16-4-4m0 0 4-4m-4 4h18" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgArrowNarrowLeft;
