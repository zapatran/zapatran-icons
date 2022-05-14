import * as React from 'react';
import { SVGProps } from 'react';

const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m10 20 4-16m4 4 4 4-4 4M6 16l-4-4 4-4"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCode;
