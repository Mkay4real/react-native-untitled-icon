import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgIntersectCircle = props => (
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
      d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
    />
  </Svg>
);
export default SvgIntersectCircle;
