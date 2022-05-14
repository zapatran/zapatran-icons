import * as React from 'react';
import { SVGProps } from 'react';

const SvgClipboardCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H9Z" fill="#4A5568" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5a2 2 0 0 1 2-2 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3 2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm9.707 5.707a1 1 0 0 0-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgClipboardCheck;
