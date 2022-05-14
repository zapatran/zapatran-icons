import * as React from 'react';
import { SVGProps } from 'react';

const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4a3 3 0 0 1 6 0v4a3 3 0 1 1-6 0V4Zm4 10.93A7.001 7.001 0 0 0 17 8a1 1 0 1 0-2 0A5 5 0 0 1 5 8a1 1 0 0 0-2 0 7.001 7.001 0 0 0 6 6.93V17H6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.07Z"
      fill="#4B5563"
    />
  </svg>
);

export default SvgMicrophone;
