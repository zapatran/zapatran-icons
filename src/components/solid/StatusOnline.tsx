import * as React from 'react';
import { SVGProps } from 'react';

const SvgStatusOnline = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.05 3.636a1 1 0 0 1 0 1.414 7 7 0 0 0 0 9.9 1 1 0 1 1-1.414 1.414 9 9 0 0 1 0-12.728 1 1 0 0 1 1.414 0Zm9.9 0a1 1 0 0 1 1.414 0 9 9 0 0 1 0 12.728 1 1 0 1 1-1.414-1.414 7 7 0 0 0 0-9.9 1 1 0 0 1 0-1.414ZM7.879 6.464a1 1 0 0 1 0 1.414 3 3 0 0 0 0 4.243 1 1 0 1 1-1.415 1.414 5 5 0 0 1 0-7.07 1 1 0 0 1 1.415 0Zm4.242 0a1 1 0 0 1 1.415 0 5 5 0 0 1 0 7.072 1 1 0 0 1-1.415-1.415 3 3 0 0 0 0-4.242 1 1 0 0 1 0-1.415ZM10 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1Z"
      fill="#374151"
    />
  </svg>
);

export default SvgStatusOnline;
