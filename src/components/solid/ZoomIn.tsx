import * as React from 'react';
import { SVGProps } from 'react';

const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 8a1 1 0 0 1 1-1h1V6a1 1 0 0 1 2 0v1h1a1 1 0 1 1 0 2H9v1a1 1 0 1 1-2 0V9H6a1 1 0 0 1-1-1Z"
      fill="#4A5568"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8Zm6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgZoomIn;
