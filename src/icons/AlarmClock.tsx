import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmClock = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3 2 6m20 0-3-3M6 19l-2 2m14-2 2 2M12 9v4l2 2m-2 6a8 8 0 1 0 0-16.001A8 8 0 0 0 12 21"
    />
  </Svg>
);
export default SvgAlarmClock;