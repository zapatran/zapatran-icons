import * as React from 'react';
import { SVGProps } from 'react';

const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0ZM10 7v3m0 0v3m0-3h3m-3 0H7"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgZoomIn;
