import * as React from 'react';
import { SVGProps } from 'react';

const SvgChartPie = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 10a8 8 0 0 1 8-8v8h8a8 8 0 1 1-16 0Z" fill="#4A5568" />
    <path d="M12 2.252A8.014 8.014 0 0 1 17.748 8H12V2.252Z" fill="#4A5568" />
  </svg>
);

export default SvgChartPie;
