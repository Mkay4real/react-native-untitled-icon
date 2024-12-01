import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReverseRight = props => (
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
      d="M20 7H10a6 6 0 1 0 0 12h10m0-12-4-4m4 4-4 4"
    />
  </Svg>
);
export default SvgReverseRight;
