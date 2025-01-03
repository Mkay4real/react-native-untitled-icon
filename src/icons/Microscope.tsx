import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicroscope = (props: SvgProps) => (
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
      d="M3 22h9M11 6.252a8 8 0 0 1 5 15.166M5.5 13h4c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89s0 .697-.038.89a2 2 0 0 1-1.572 1.572C10.197 18 9.965 18 9.5 18h-4c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C3 16.197 3 15.965 3 15.5s0-.697.038-.89a2 2 0 0 1 1.572-1.572C4.803 13 5.035 13 5.5 13M4 5.5V13h7V5.5a3.5 3.5 0 1 0-7 0"
    />
  </Svg>
);
export default SvgMicroscope;
