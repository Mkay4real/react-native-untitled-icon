import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAlignRight01 = props => (
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
      d="M21 21V3M3 12h14m0 0-7-7m7 7-7 7"
    />
  </Svg>
);
export default SvgAlignRight01;
