import * as React from 'react';
import { SVGProps } from 'react';

const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm-1 9v-1h5v2H5a1 1 0 0 1-1-1Zm7 1h4a1 1 0 0 0 1-1v-1h-5v2Zm0-4h5V8h-5v2ZM9 8H4v2h5V8Z"
      fill="#374151"
    />
  </svg>
);

export default SvgTable;
