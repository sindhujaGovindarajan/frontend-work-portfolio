import * as React from "react";
import styled from "styled-components";

interface SvgSiteLogoProps extends React.SVGAttributes<SVGElement> {
  style?: React.CSSProperties;
}

const SiteLogo = (props: SvgSiteLogoProps) => (
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
    />
    <circle cx={150} cy={225} r={10} fill="#31D93C" />
  </svg>
);

const SvgSiteLogo = styled(SiteLogo)`
  height: clamp(40px, 6vw, 60px);
  width: auto;
  margin-right: 7px;
  margin-bottom: 7px;
  display: block;

  @media (max-width: 1200px) {
    height: 50px;
    margin-right: 6px;
    margin-bottom: 6px;
  }

  @media (max-width: 768px) {
    height: 45px;
    margin-right: 5px;
    margin-bottom: 5px;
  }

  @media (max-width: 576px) {
    height: 40px;
    margin-right: 4px;
    margin-bottom: 4px;
  }

  @media (max-width: 320px) {
    height: 35px;
    margin-right: 3px;
    margin-bottom: 3px;
  }
`;
export default SvgSiteLogo;
