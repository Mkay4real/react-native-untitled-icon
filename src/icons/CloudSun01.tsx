import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudSun01 = (props: SvgProps) => (
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
      d="M19.368 12.405A5 5 0 1 0 12 8m0 0a5.5 5.5 0 0 0-4.9 3.001L7 11a5 5 0 0 0 0 10h10.5a4.5 4.5 0 1 0-.206-8.995A5.5 5.5 0 0 0 12 8"
    />
  </Svg>
);
export default SvgCloudSun01;
