import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronDoubleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m19 13-7 7-7-7m14-8-7 7-7-7"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgChevronDoubleDown;
