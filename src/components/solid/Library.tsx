import * as React from 'react';
import { SVGProps } from 'react';

const SvgLibrary = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.496 2.132a1 1 0 0 0-.992 0l-7 4A1 1 0 0 0 3 8v7a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2V8a1 1 0 0 0 .496-1.868l-7-4ZM6 9a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Zm3 1a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0v-3Zm5-1a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Z"
      fill="#4B5563"
    />
  </svg>
);

export default SvgLibrary;
