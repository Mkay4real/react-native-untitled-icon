import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClockRefresh = (props: SvgProps) => (
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
      d="M20.453 12.893A8.5 8.5 0 0 1 4.638 16.25l-.25-.433m-.842-4.71A8.5 8.5 0 0 1 19.361 7.75l.25.433M3.493 18.066l.732-2.732 2.732.732m10.085-8.132 2.732.732.732-2.732M12 7.5V12l2.5 1.5"
    />
  </Svg>
);
export default SvgClockRefresh;
