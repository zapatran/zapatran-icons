import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowsExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0-5 5M4 16v4m0 0h4m-4 0 5-5m11 5-5-5m5 5v-4m0 4h-4"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrowsExpand;
