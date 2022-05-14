import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-5L9 4H4Zm4 6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8Z"
      fill="#374151"
    />
  </svg>
);

export default SvgFolderRemove;
