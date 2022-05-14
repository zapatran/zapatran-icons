import * as React from 'react';
import { SVGProps } from 'react';

const SvgPhotograph = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm12 12H4l4-8 3 6 2-4 3 6Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgPhotograph;
