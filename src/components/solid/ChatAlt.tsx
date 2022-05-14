import * as React from 'react';
import { SVGProps } from 'react';

const SvgChatAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 5v8a2 2 0 0 1-2 2h-5l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2ZM7 8H5v2h2V8Zm2 0h2v2H9V8Zm6 0h-2v2h2V8Z"
      fill="#4B5563"
    />
  </svg>
);

export default SvgChatAlt;
