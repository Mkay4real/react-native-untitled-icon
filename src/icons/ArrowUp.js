import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowUp = props => (
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
      d="M12 19V5m0 0-7 7m7-7 7 7"
    />
  </Svg>
);
export default SvgArrowUp;
