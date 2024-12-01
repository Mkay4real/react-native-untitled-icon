import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUnderline02 = props => (
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
      d="M19 4v6a7 7 0 1 1-14 0V4m3.5 0v6a7 7 0 0 0 5.14 6.75M4 21h16M3 4h7.5M17 4h4"
    />
  </Svg>
);
export default SvgUnderline02;
