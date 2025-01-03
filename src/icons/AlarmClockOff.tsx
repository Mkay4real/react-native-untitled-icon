import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmClockOff = (props: SvgProps) => (
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
      d="M10.5 5.142a8 8 0 0 1 9.358 9.358m-1.722 3.634A8 8 0 1 1 6.862 6.869M4 4 2 6m20 0-3-3M6 19l-2 2m17 0L3 3"
    />
  </Svg>
);
export default SvgAlarmClockOff;
