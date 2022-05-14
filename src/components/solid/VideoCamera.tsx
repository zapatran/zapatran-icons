import * as React from 'react';
import { SVGProps } from 'react';

const SvgVideoCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6ZM14.553 7.106A1 1 0 0 0 14 8v4a1 1 0 0 0 .553.894l2 1A1 1 0 0 0 18 13V7a1 1 0 0 0-1.447-.894l-2 1Z"
      fill="#374151"
    />
  </svg>
);

export default SvgVideoCamera;
