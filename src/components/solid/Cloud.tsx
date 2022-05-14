import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.5 16a3.5 3.5 0 0 1-.369-6.98 4 4 0 1 1 7.753-1.977A4.5 4.5 0 1 1 13.5 16h-8Z" fill="#374151" />
  </svg>
);

export default SvgCloud;
