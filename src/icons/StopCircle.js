import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStopCircle = props => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C8.76 8 9.04 8 9.6 8h4.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C16 8.76 16 9.04 16 9.6v4.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C15.24 16 14.96 16 14.4 16H9.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C8 15.24 8 14.96 8 14.4z"
    />
  </Svg>
);
export default SvgStopCircle;
