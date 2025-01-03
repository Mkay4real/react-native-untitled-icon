import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWebcam02 = (props: SvgProps) => (
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
      d="M8 22h8m4.5-11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0m-5.312 0a3.188 3.188 0 1 1-6.376 0 3.188 3.188 0 0 1 6.376 0"
    />
  </Svg>
);
export default SvgWebcam02;
