import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlusSm = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPlusSm;
