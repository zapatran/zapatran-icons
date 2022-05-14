import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookmarkAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm11 1H6v8l4-2 4 2V6Z"
      fill="#4B5563"
    />
  </svg>
);

export default SvgBookmarkAlt;
