import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 11a6 6 0 0 1 6 6H2a6 6 0 0 1 6-6ZM16 7a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V7Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgUserAdd;
