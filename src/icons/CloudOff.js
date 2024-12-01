import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCloudOff = props => (
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
      d="M21.7 16.118a4.5 4.5 0 0 0-3.78-6.099 6 6 0 0 0-7.22-4.878M7.287 7.286a6 6 0 0 0-1.207 2.733A4.5 4.5 0 0 0 6.5 19h11c.456 0 .896-.068 1.311-.194M3 3l18 18"
    />
  </Svg>
);
export default SvgCloudOff;
