import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 4v16m8-8H4" stroke="#111827" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgPlus;
