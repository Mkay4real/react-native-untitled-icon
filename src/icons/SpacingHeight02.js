import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpacingHeight02 = props => (
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
      d="M21 3H3m18 18H3m9-3.5v-11m3 0H9m6 11H9"
    />
  </Svg>
);
export default SvgSpacingHeight02;
