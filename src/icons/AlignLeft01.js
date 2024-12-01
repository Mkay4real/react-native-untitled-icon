import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAlignLeft01 = props => (
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
      d="M3 3v18m18-9H7m0 0 7 7m-7-7 7-7"
    />
  </Svg>
);
export default SvgAlignLeft01;
