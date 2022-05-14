import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearchCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" fill="#374151" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-13a4 4 0 0 0-3.446 6.032l-2.261 2.26a1 1 0 1 0 1.414 1.415l2.261-2.261A4 4 0 1 0 11 5Z"
      fill="#374151"
    />
  </svg>
);

export default SvgSearchCircle;
