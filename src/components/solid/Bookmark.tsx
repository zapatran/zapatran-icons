import * as React from 'react';

function SvgBookmark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" fill="#4A5568" />
    </svg>
  );
}

export default SvgBookmark;
