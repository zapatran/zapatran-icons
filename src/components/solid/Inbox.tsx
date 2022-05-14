import * as React from 'react';
import { SVGProps } from 'react';

const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm0 2h10v7h-2l-1 2H8l-1-2H5V5Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgInbox;
