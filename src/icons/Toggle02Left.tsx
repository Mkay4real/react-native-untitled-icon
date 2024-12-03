import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgToggle02Left = (props: SvgProps) => (
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
      d="M10 16h8a4 4 0 0 0 0-8h-8m2 4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </Svg>
);
export default SvgToggle02Left;
