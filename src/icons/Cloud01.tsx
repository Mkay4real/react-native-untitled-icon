import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloud01 = (props: SvgProps) => (
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
      d="M6.5 19a4.5 4.5 0 0 1-.42-8.98 6.002 6.002 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 19z"
    />
  </Svg>
);
export default SvgCloud01;