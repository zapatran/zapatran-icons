import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrendingDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" height="1rem" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v2.586l-4.293-4.293a1 1 0 0 0-1.414 0L8 9.586 3.707 5.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0L11 9.414 14.586 13H12Z"
      fill="#4A5568"
    />
  </svg>
);

export default SvgTrendingDown;
