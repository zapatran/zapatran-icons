import * as React from 'react';
import { SVGProps } from 'react';

const SvgChartSquareBar = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm9 4a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V7Zm-3 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V9Zm-3 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Z"
      fill="#4B5563"
    />
  </svg>
);

export default SvgChartSquareBar;
