import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyPound = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15 9a2 2 0 1 0-4 0v5a2 2 0 0 1-2 2h6m-6-4h4m8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCurrencyPound;
