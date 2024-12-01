import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMove = props => (
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
      d="m5 9-3 3m0 0 3 3m-3-3h20M9 5l3-3m0 0 3 3m-3-3v20m3-3-3 3m0 0-3-3M19 9l3 3m0 0-3 3"
    />
  </Svg>
);
export default SvgMove;
