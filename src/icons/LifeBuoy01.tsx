import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLifeBuoy01 = (props: SvgProps) => (
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
      d="M9.136 9.136 4.93 4.93m0 14.142 4.239-4.239m5.693.032 4.207 4.207m0-14.142-4.24 4.24M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    />
  </Svg>
);
export default SvgLifeBuoy01;
