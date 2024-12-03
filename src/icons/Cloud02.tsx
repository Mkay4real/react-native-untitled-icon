import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloud02 = (props: SvgProps) => (
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
      d="M6 19a4 4 0 0 1-.999-7.874L5 11a7 7 0 0 1 13.96-.758A4.502 4.502 0 0 1 17.5 19z"
    />
  </Svg>
);
export default SvgCloud02;
