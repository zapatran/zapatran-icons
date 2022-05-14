import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-2.5L5 18V4Z" fill="#4A5568" />
  </svg>
);

export default SvgBookmark;
