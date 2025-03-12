import * as React from "react";

interface SvgSiteLogoProps extends React.SVGAttributes<SVGElement> {
  style?: React.CSSProperties;
}

const SvgSiteLogo = (props: SvgSiteLogoProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" {...props}>
    <circle cx={150} cy={150} r={135} fill="#5831D9" />
    <defs>
      <linearGradient id="siteLogo_svg__a" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="100%" stopColor="#FFF" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#siteLogo_svg__a)"
      strokeLinecap="round"
      strokeWidth={24}
      d="M150 75c-50 0-60 60 0 60s50 60 0 60"
      filter="url(#siteLogo_svg__boxShadow)"
    />
    <circle
      cx={150}
      cy={225}
      r={10}
      fill="#31D93C"
      filter="url(#siteLogo_svg__boxShadow)"
    />
  </svg>
);
export default SvgSiteLogo;
