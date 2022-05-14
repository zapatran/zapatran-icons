import * as React from 'react';
import { SVGProps } from 'react';

const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 3a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z" fill="#4A5568" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 8h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm5 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgArchive;
