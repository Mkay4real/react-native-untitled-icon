import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowCircleBrokenDownLeft = (props: SvgProps) => (
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
      d="M9 9v6m0 0h6m-6 0L19 5m2.66 4.41a10 10 0 0 1-2.589 9.661c-3.905 3.905-10.237 3.905-14.142 0s-3.905-10.237 0-14.142a10 10 0 0 1 9.66-2.59"
    />
  </Svg>
);
export default SvgArrowCircleBrokenDownLeft;
