import * as React from 'react';
import { SVGProps } from 'react';

const SvgLockOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 2a5 5 0 0 0-5 5v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H7V7a3 3 0 0 1 5.905-.75 1 1 0 0 0 1.937-.5A5.002 5.002 0 0 0 10 2Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgLockOpen;
