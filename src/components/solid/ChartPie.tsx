import * as React from 'react';

function SvgChartPie(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" fill="#4A5568" />
      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" fill="#4A5568" />
    </svg>
  );
}

export default SvgChartPie;
