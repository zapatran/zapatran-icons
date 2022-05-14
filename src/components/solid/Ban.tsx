import * as React from 'react';
import { SVGProps } from 'react';

const SvgBan = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.477 14.89A6 6 0 0 1 5.11 6.524l8.367 8.368Zm1.414-1.414L6.524 5.11a6 6 0 0 1 8.367 8.367ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      fill="#4B5563"
    />
  </svg>
);

export default SvgBan;
