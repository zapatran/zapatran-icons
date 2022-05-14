import * as React from 'react';
import { SVGProps } from 'react';

const SvgCubeTransparent = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m14 10-2 1m0 0-2-1m2 1v2.5M20 7l-2 1m2-1-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1 2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
      stroke="#374151"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCubeTransparent;
