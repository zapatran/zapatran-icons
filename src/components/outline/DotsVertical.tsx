import * as React from 'react';
import { SVGProps } from 'react';

const SvgDotsVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      stroke="#4A5568"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgDotsVertical;
