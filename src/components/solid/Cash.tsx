import * as React from 'react';
import { SVGProps } from 'react';

const SvgCash = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2V6h10a2 2 0 0 0-2-2H4Zm2 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4Zm6 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgCash;
