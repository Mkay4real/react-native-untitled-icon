import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowNarrowDownLeft = props => (
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
      d="M18 6 6 18m0 0h8m-8 0v-8"
    />
  </Svg>
);
export default SvgArrowNarrowDownLeft;
