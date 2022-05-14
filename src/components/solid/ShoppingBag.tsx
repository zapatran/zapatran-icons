import * as React from 'react';
import { SVGProps } from 'react';

const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2a4 4 0 0 0-4 4v1H5a1 1 0 0 0-.994.89l-1 9A1 1 0 0 0 4 18h12a1 1 0 0 0 .994-1.11l-1-9A1 1 0 0 0 15 7h-1V6a4 4 0 0 0-4-4Zm2 5V6a2 2 0 1 0-4 0v1h4Zm-6 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill="#374151"
    />
  </svg>
);

export default SvgShoppingBag;
