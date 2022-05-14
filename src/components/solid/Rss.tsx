import * as React from 'react';
import { SVGProps } from 'react';

const SvgRss = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 3a1 1 0 0 0 0 2c5.523 0 10 4.477 10 10a1 1 0 1 0 2 0C17 8.373 11.627 3 5 3Z" fill="#374151" />
    <path
      d="M4 9a1 1 0 0 1 1-1 7 7 0 0 1 7 7 1 1 0 1 1-2 0 5 5 0 0 0-5-5 1 1 0 0 1-1-1ZM3 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="#374151"
    />
  </svg>
);

export default SvgRss;
