import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrophy02 = (props: SvgProps) => (
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
      d="M12 17a6.5 6.5 0 0 1-6.5-6.5V4.556c0-.519 0-.778.094-.979a1 1 0 0 1 .483-.483C6.278 3 6.537 3 7.056 3h9.888c.519 0 .778 0 .979.094a1 1 0 0 1 .483.483c.094.201.094.46.094.979V10.5A6.5 6.5 0 0 1 12 17m0 0v4m5 0H7M22 5v5M2 5v5"
    />
  </Svg>
);
export default SvgTrophy02;