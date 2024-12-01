import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBluetoothSignal = props => (
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
      d="m2 7 12 10-6 5V2l6 5L2 17M20.145 6.5a9.4 9.4 0 0 1 1.769 5.5 9.4 9.4 0 0 1-1.77 5.5M17 8.857c.621.891.986 1.975.986 3.143A5.48 5.48 0 0 1 17 15.143"
    />
  </Svg>
);
export default SvgBluetoothSignal;
