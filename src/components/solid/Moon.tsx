import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z" fill="#4A5568" />
  </svg>
);

export default SvgMoon;
