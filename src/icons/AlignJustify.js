import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAlignJustify = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 10H3m18 8H3M21 6H3m18 8H3"
    />
  </Svg>
);
export default SvgAlignJustify;
