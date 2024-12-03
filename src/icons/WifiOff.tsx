import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWifiOff = (props: SvgProps) => (
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
      d="M15.312 10c1.368.426 2.65 1.12 3.768 2.05m3.5-3.55a16 16 0 0 0-12.383-3.896M8.53 15.61a6 6 0 0 1 6.95 0M12 19.5h.01M1.193 8.7A16 16 0 0 1 5.76 5.764m-1.027 6.48a10.97 10.97 0 0 1 5-2.51m5.966 6.042A5.97 5.97 0 0 0 12 14.5c-1.416 0-2.718.49-3.745 1.312M3 3l18 18"
    />
  </Svg>
);
export default SvgWifiOff;
