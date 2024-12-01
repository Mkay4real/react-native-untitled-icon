import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowNarrowRight = props => (
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
      d="M4 12h16m0 0-6-6m6 6-6 6"
    />
  </Svg>
);
export default SvgArrowNarrowRight;
