import * as React from 'react';
import { SVGProps } from 'react';

const SvgDotsCircleHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM7 9H5v2h2V9Zm8 0h-2v2h2V9ZM9 9h2v2H9V9Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgDotsCircleHorizontal;
