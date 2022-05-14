import * as React from 'react';
import { SVGProps } from 'react';

const SvgReceiptTax = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m9 14 6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2ZM10 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgReceiptTax;
