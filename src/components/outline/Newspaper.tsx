import * as React from 'react';
import { SVGProps } from 'react';

const SvgNewspaper = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8Z"
      stroke="#4B5563"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgNewspaper;
