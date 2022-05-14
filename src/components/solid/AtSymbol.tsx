import * as React from 'react';
import { SVGProps } from 'react';

const SvgAtSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.243 5.757a6 6 0 1 0-.986 9.284 1 1 0 1 1 1.087 1.678A8 8 0 1 1 18 10a3 3 0 0 1-4.8 2.401A4 4 0 1 1 14 10a1 1 0 1 0 2 0c0-1.537-.586-3.07-1.757-4.243ZM12 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgAtSymbol;
