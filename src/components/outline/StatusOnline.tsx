import * as React from 'react';
import { SVGProps } from 'react';

const SvgStatusOnline = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.636 18.364a9 9 0 0 1 0-12.728m12.728 0a9 9 0 0 1 0 12.728m-9.9-2.829a5 5 0 0 1 0-7.07m7.072 0a5 5 0 0 1 0 7.07M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgStatusOnline;
