import * as React from 'react';
import { SVGProps } from 'react';

const SvgReceiptRefund = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16 15v-1a4 4 0 0 0-4-4H8m0 0 3 3m-3-3 3-3m9 14V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2Z"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgReceiptRefund;
