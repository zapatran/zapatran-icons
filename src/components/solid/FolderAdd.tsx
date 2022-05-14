import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-5L9 4H4Zm7 5a1 1 0 1 0-2 0v1H8a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V9Z"
      fill="#374151"
    />
  </svg>
);

export default SvgFolderAdd;
