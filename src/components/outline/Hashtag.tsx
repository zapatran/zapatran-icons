import * as React from 'react';
import { SVGProps } from 'react';

const SvgHashtag = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m7 20 4-16m2 16 4-16M6 9h14M4 15h14"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgHashtag;
