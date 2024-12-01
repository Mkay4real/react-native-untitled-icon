import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBluetoothOn = props => (
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
      d="m6 7 12 10-6 5V2l6 5L6 17"
    />
  </Svg>
);
export default SvgBluetoothOn;
