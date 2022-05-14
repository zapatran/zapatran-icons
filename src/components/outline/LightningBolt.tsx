import * as React from 'react';
import { SVGProps } from 'react';

const SvgLightningBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 10V3L4 14h7v7l9-11h-7Z"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgLightningBolt;
