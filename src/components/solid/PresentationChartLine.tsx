import * as React from 'react';
import { SVGProps } from 'react';

const SvgPresentationChartLine = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2H3Zm11.707 4.707a1 1 0 0 0-1.414-1.414L10 9.586 8.707 8.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 1 0 1.414 1.414L8 10.414l1.293 1.293a1 1 0 0 0 1.414 0l4-4Z"
      fill="#374151"
    />
  </svg>
);

export default SvgPresentationChartLine;
