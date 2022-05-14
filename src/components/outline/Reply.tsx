import * as React from 'react';
import { SVGProps } from 'react';

const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 10h10a8 8 0 0 1 8 8v2M3 10l6 6m-6-6 6-6"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgReply;
