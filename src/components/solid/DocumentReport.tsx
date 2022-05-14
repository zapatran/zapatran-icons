import * as React from 'react';
import { SVGProps } from 'react';

const SvgDocumentReport = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.414A2 2 0 0 0 15.414 6L12 2.586A2 2 0 0 0 10.586 2H6Zm2 10a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Zm2-3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm4-1a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0V8Z"
      fill="#4B5563"
    />
  </svg>
);

export default SvgDocumentReport;
