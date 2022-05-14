import * as React from 'react';
import { SVGProps } from 'react';

const SvgClipboardList = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H9Z" fill="#4A5568" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5a2 2 0 0 1 2-2 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3 2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm3 4a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2H7Zm3 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2h-3Zm-3 4a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H7Zm3 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgClipboardList;
