import * as React from 'react';
import { SVGProps } from 'react';

const SvgSelector = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m8 9 4-4 4 4m0 6-4 4-4-4" stroke="#4A5568" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgSelector;
