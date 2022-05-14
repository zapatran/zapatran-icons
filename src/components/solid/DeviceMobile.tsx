import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeviceMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#374151"
    />
  </svg>
);

export default SvgDeviceMobile;
