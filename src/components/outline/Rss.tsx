import * as React from 'react';
import { SVGProps } from 'react';

const SvgRss = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 0 1 7 7m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgRss;
