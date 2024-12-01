import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowNarrowUpLeft = props => (
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
      d="M18 18 6 6m0 0v8m0-8h8"
    />
  </Svg>
);
export default SvgArrowNarrowUpLeft;
