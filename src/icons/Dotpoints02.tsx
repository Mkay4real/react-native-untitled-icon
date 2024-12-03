import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDotpoints02 = (props: SvgProps) => (
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
      d="M21 5H10m11 14H10m11-7H10M6 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </Svg>
);
export default SvgDotpoints02;
