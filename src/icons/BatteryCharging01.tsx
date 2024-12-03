import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBatteryCharging01 = (props: SvgProps) => (
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
      d="m10.833 15 1.667-3h-4l1.667-3M22 13v-2M6.8 18h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 15.72 19 14.88 19 13.2v-2.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C16.72 6 15.88 6 14.2 6H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 8.28 2 9.12 2 10.8v2.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 18 5.12 18 6.8 18"
    />
  </Svg>
);
export default SvgBatteryCharging01;
