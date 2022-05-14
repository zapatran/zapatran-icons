import * as React from 'react';
import { SVGProps } from 'react';

const SvgDotsHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM16 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgDotsHorizontal;
