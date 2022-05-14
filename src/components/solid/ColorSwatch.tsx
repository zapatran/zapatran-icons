import * as React from 'react';
import { SVGProps } from 'react';

const SvgColorSwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2a2 2 0 0 0-2 2v11a3 3 0 1 0 6 0V4a2 2 0 0 0-2-2H4Zm1 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1.757 4.9-4.9a2 2 0 0 0 0-2.828L13.485 5.1a2 2 0 0 0-2.828 0L10 5.757v8.486ZM16 18H9.071l6-6H16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgColorSwatch;
