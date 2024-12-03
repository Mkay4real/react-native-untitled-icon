import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloud03 = (props: SvgProps) => (
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
      d="M9.5 19a7.5 7.5 0 1 1 6.641-10.988Q16.319 8 16.5 8a5.5 5.5 0 1 1 0 11z"
    />
  </Svg>
);
export default SvgCloud03;
