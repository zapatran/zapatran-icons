import * as React from 'react';
import { SVGProps } from 'react';

const SvgQrcode = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm2 2V5h1v1H5ZM3 13a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3Zm2 2v-1h1v1H5ZM13 3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-3Zm1 2v1h1V5h-1Z"
      fill="#4A5568"
    />
    <path
      d="M11 4a1 1 0 1 0-2 0v1a1 1 0 0 0 2 0V4ZM10 7a1 1 0 0 1 1 1v1h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1ZM16 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM9 13a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2v2a1 1 0 1 1-2 0v-3ZM7 11a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2h3ZM17 13a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM16 17a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2h3Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgQrcode;
