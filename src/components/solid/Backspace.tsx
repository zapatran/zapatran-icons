import * as React from 'react';
import { SVGProps } from 'react';

const SvgBackspace = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.707 4.879A3 3 0 0 1 8.828 4H15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8.828a3 3 0 0 1-2.12-.879l-4.415-4.414a1 1 0 0 1 0-1.414l4.414-4.414Zm4 2.414a1 1 0 0 0-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 10l1.293-1.293a1 1 0 0 0-1.414-1.414L12 8.586l-1.293-1.293Z"
      fill="#374151"
    />
  </svg>
);

export default SvgBackspace;
