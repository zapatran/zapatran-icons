import * as React from 'react';
import { SVGProps } from 'react';

const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.707 9.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7A.997.997 0 0 1 2 10V5a3 3 0 0 1 3-3h5c.256 0 .512.098.707.293l7 7ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgTag;
