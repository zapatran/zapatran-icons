import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowSmDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.707 10.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 12.586V5a1 1 0 0 1 2 0v7.586l2.293-2.293a1 1 0 0 1 1.414 0Z"
      fill="#111827"
    />
  </svg>
);

export default SvgArrowSmDown;
