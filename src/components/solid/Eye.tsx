import * as React from 'react';
import { SVGProps } from 'react';

const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#4A5568" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgEye;
