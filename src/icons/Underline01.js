import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUnderline01 = props => (
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
      d="M18 4v7a6 6 0 0 1-12 0V4M4 21h16"
    />
  </Svg>
);
export default SvgUnderline01;
