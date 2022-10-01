import * as React from 'react';

function SvgUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        fill="#4A5568"
      />
    </svg>
  );
}

export default SvgUser;
