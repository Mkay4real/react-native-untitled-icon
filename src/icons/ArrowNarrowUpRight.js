import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowNarrowUpRight = props => (
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
      d="M6 18 18 6m0 0h-8m8 0v8"
    />
  </Svg>
);
export default SvgArrowNarrowUpRight;
