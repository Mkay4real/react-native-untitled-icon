import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgToggle03Left = props => (
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
      d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 0 12H8a6 6 0 0 1-6-6"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    />
  </Svg>
);
export default SvgToggle03Left;