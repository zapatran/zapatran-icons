import * as React from 'react';
import { SVGProps } from 'react';

const SvgInboxIn = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2m-4-1v8m0 0 3-3m-3 3L9 8m-5 5h2.586a1 1 0 0 1 .707.293l2.414 2.414a1 1 0 0 0 .707.293h3.172a1 1 0 0 0 .707-.293l2.414-2.414a1 1 0 0 1 .707-.293H20"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgInboxIn;
