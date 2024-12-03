import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCoins01 = (props: SvgProps) => (
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
      d="M15.938 15.938A7.001 7.001 0 0 0 15 2a7 7 0 0 0-6.938 6.062M16 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
    />
  </Svg>
);
export default SvgCoins01;
