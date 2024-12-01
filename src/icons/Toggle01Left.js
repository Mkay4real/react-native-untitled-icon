import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgToggle01Left = props => (
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
      d="M7 17h10a5 5 0 0 0 0-10H7m0 10A5 5 0 0 1 7 7m0 10A5 5 0 0 0 7 7"
    />
  </Svg>
);
export default SvgToggle01Left;
