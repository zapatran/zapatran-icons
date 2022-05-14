import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDoubleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.707 15.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1 0 1.414Zm-6 0a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L5.414 10l4.293 4.293a1 1 0 0 1 0 1.414Z"
      fill="#374151"
    />
  </svg>
);

export default SvgChevronDoubleLeft;
