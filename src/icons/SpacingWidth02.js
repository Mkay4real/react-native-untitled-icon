import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpacingWidth02 = props => (
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
      d="M21 21V3M3 21V3m3.5 9h11m0 3V9m-11 6V9"
    />
  </Svg>
);
export default SvgSpacingWidth02;
