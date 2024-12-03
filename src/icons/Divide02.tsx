import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDivide02 = (props: SvgProps) => (
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
      d="M4 12h16m-6-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </Svg>
);
export default SvgDivide02;
