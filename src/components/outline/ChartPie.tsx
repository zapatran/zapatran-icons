import * as React from 'react';
import { SVGProps } from 'react';

const SvgChartPie = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11 3.055A9.001 9.001 0 1 0 20.945 13H11V3.055Z"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.488 9H15V3.512A9.025 9.025 0 0 1 20.488 9Z"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgChartPie;
