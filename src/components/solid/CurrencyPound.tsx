import * as React from 'react';
import { SVGProps } from 'react';

const SvgCurrencyPound = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-14a3 3 0 0 0-3 3v2H7a1 1 0 0 0 0 2h1v1a1 1 0 0 1-1 1 1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 1 0 0-2h-1V7a1 1 0 1 1 2 0 1 1 0 1 0 2 0 3 3 0 0 0-3-3Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgCurrencyPound;
