import * as React from 'react';
import { SVGProps } from 'react';

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM7 8a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V8Zm5-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Z"
      fill="#4B5563"
    />
  </svg>
);

export default SvgPause;
