import * as React from 'react';

function SvgArchive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" fill="#4A5568" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
        fill="#4A5568"
      />
    </svg>
  );
}

export default SvgArchive;
