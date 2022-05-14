import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyYen = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m9 8 3 5m0 0 3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCurrencyYen;
