import * as React from 'react';

function SvgDocumentAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        stroke="#4A5568"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDocumentAdd;
