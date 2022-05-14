import * as React from 'react';
import { SVGProps } from 'react';

const SvgGift = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5a3 3 0 0 1 5-2.236A3 3 0 0 1 14.83 6H16a2 2 0 1 1 0 4h-5V9a1 1 0 1 0-2 0v1H4a2 2 0 1 1 0-4h1.17C5.06 5.687 5 5.35 5 5Zm4 1V5a1 1 0 1 0-1 1h1Zm3 0a1 1 0 1 0-1-1v1h1Z"
      fill="#374151"
    />
    <path d="M9 11H3v5a2 2 0 0 0 2 2h4v-7ZM11 18h4a2 2 0 0 0 2-2v-5h-6v7Z" fill="#374151" />
  </svg>
);

export default SvgGift;
