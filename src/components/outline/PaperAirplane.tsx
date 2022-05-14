import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaperAirplane = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m12 19 9 2-9-18-9 18 9-2Zm0 0v-8"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPaperAirplane;
