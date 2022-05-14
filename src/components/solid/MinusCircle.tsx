import * as React from 'react';
import { SVGProps } from 'react';

const SvgMinusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM7 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H7Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgMinusCircle;
