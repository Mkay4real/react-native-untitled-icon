import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEqualNot = props => (
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
      d="M5 9h14M5 15h14m0-10L5 19"
    />
  </Svg>
);
export default SvgEqualNot;
