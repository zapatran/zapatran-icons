import * as React from 'react';
import { SVGProps } from 'react';

const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12 1.586-4 4v12.828l4-4V1.586ZM3.707 3.293A1 1 0 0 0 2 4v10a1 1 0 0 0 .293.707L6 18.414V5.586L3.707 3.293ZM17.707 5.293 14 1.586v12.828l2.293 2.293A1 1 0 0 0 18 16V6a1 1 0 0 0-.293-.707Z"
      fill="#374151"
    />
  </svg>
);

export default SvgMap;
