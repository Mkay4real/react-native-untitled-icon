import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowNarrowDownRight = props => (
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
      d="m6 6 12 12m0 0v-8m0 8h-8"
    />
  </Svg>
);
export default SvgArrowNarrowDownRight;
