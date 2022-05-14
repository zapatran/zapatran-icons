import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM14 17a6 6 0 0 0-12 0h12ZM13 8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgUserRemove;
