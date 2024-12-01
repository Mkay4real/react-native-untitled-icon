import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgScissors02 = props => (
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
      d="M4.5 8.6 21 17m0-10L4.5 15.4M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
    />
  </Svg>
);
export default SvgScissors02;