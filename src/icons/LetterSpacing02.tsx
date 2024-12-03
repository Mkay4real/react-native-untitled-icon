import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLetterSpacing02 = (props: SvgProps) => (
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
      d="M2 18h20M2 18l3-3m-3 3 3 3m17-3-3-3m3 3-3 3M7 3h10m-5 0v11"
    />
  </Svg>
);
export default SvgLetterSpacing02;
