import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencilAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.414 2.586a2 2 0 0 0-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 0 0 0-2.828Z" fill="#4A5568" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6a2 2 0 0 1 2-2h4a1 1 0 0 1 0 2H4v10h10v-4a1 1 0 1 1 2 0v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgPencilAlt;
