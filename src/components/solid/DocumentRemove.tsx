import * as React from 'react';
import { SVGProps } from 'react';

const SvgDocumentRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414A2 2 0 0 0 15.414 6L12 2.586A2 2 0 0 0 10.586 2H6Zm1 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgDocumentRemove;
