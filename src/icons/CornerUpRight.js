import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCornerUpRight = props => (
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
      d="M4 20v-1.4c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C8.56 9 10.24 9 13.6 9H20m0 0-5 5m5-5-5-5"
    />
  </Svg>
);
export default SvgCornerUpRight;
