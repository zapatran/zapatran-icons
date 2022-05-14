import * as React from 'react';
import { SVGProps } from 'react';

const SvgBackspace = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m12 14 2-2m0 0 2-2m-2 2-2-2m2 2 2 2M3 12l6.414 6.414a2 2 0 0 0 1.414.586H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-8.172a2 2 0 0 0-1.414.586L3 12Z"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgBackspace;
