import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowCircleBrokenLeft = (props: SvgProps) => (
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
      d="M20.662 17A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a10 10 0 0 1 8.662 5M12 8l-4 4m0 0 4 4m-4-4h14"
    />
  </Svg>
);
export default SvgArrowCircleBrokenLeft;
