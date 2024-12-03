import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBold02 = (props: SvgProps) => (
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
      d="M6 4v16M9.5 4h6a4 4 0 0 1 0 8h-6 7a4 4 0 0 1 0 8h-7m0-16v16m0-16H4m5.5 16H4"
    />
  </Svg>
);
export default SvgBold02;
