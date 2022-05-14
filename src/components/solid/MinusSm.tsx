import * as React from 'react';
import { SVGProps } from 'react';

const SvgMinusSm = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
      fill="#374151"
    />
  </svg>
);

export default SvgMinusSm;
