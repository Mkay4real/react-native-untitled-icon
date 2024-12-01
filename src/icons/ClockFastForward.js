import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgClockFastForward = props => (
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
      d="m22.7 11.5-2 2-2-2m2.245 1.5q.055-.492.055-1a9 9 0 1 0-2 5.657M12 7v5l3 2"
    />
  </Svg>
);
export default SvgClockFastForward;
