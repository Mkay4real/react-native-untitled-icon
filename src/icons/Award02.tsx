import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAward02 = (props: SvgProps) => (
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
      d="M7 15.09V22l4.703-1.881c.11-.044.165-.066.221-.075a.5.5 0 0 1 .152 0c.056.009.111.03.221.075L17 22v-6.91m2.5-5.59a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
    />
  </Svg>
);
export default SvgAward02;
