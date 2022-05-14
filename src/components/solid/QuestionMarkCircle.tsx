import * as React from 'react';
import { SVGProps } from 'react';

const SvgQuestionMarkCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-3a1 1 0 0 0-.867.5 1 1 0 1 1-1.731-1A3 3 0 0 1 13 8a3.001 3.001 0 0 1-2 2.83V11a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1 1 1 0 1 0 0-2Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgQuestionMarkCircle;
