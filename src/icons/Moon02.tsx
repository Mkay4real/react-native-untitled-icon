import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoon02 = (props: SvgProps) => (
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
      d="M21.955 12.956a8 8 0 1 1-10.91-10.911C5.97 2.526 2 6.799 2 12c0 5.523 4.477 10 10 10 5.2 0 9.473-3.97 9.955-9.044"
    />
  </Svg>
);
export default SvgMoon02;
