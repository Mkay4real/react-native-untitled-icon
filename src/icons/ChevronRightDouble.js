import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChevronRightDouble = props => (
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
      d="m6 17 5-5-5-5m7 10 5-5-5-5"
    />
  </Svg>
);
export default SvgChevronRightDouble;
