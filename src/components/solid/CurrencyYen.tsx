import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyYen = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM7.858 5.485a1 1 0 0 0-1.715 1.03L7.633 9H7a1 1 0 1 0 0 2h1.834l.166.277V12H7a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h2a1 1 0 1 0 0-2h-2v-.723l.166-.277H13a1 1 0 1 0 0-2h-.634l1.492-2.486a1 1 0 1 0-1.716-1.029L10.034 9h-.068L7.858 5.485Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgCurrencyYen;
