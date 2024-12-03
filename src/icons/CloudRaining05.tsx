import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudRaining05 = (props: SvgProps) => (
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
      d="M16 18.5 15 21m-7-2.5L7 21m5-2.5L11 21m-4-6a5 5 0 1 1 .1-9.999 5.502 5.502 0 0 1 10.195 1.004Q17.395 6 17.5 6a4.5 4.5 0 1 1 0 9z"
    />
  </Svg>
);
export default SvgCloudRaining05;
