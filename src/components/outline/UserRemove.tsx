import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM9 14a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6ZM21 12h-6"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgUserRemove;
