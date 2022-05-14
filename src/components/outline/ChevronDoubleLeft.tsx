import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDoubleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m11 19-7-7 7-7m8 14-7-7 7-7"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgChevronDoubleLeft;
