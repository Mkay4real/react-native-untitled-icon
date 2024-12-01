import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReverseLeft = props => (
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
      d="M4 7h10a6 6 0 0 1 0 12H4M4 7l4-4M4 7l4 4"
    />
  </Svg>
);
export default SvgReverseLeft;
