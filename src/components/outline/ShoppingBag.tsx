import * as React from 'react';
import { SVGProps } from 'react';

const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9Z"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgShoppingBag;
