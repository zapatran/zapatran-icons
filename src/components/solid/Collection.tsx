import * as React from 'react';
import { SVGProps } from 'react';

const SvgCollection = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7 3a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H7ZM4 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM2 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgCollection;
