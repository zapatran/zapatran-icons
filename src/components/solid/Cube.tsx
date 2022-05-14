import * as React from 'react';
import { SVGProps } from 'react';

const SvgCube = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11 17a1 1 0 0 0 1.447.894l4-2A1 1 0 0 0 17 15V9.236a1 1 0 0 0-1.447-.894l-4 2a1 1 0 0 0-.553.894V17ZM15.211 6.276a1 1 0 0 0 0-1.788l-4.764-2.382a1 1 0 0 0-.894 0L4.789 4.488a1 1 0 0 0 0 1.788l4.764 2.382a1 1 0 0 0 .894 0l4.764-2.382ZM4.447 8.342A1 1 0 0 0 3 9.236V15a1 1 0 0 0 .553.894l4 2A1 1 0 0 0 9 17v-5.764a1 1 0 0 0-.553-.894l-4-2Z"
      fill="#374151"
    />
  </svg>
);

export default SvgCube;
