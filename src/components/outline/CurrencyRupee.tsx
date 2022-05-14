import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyRupee = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 8h6m-5 0a3 3 0 1 1 0 6H9l3 3m-3-6h6m6 1a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCurrencyRupee;
