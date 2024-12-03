import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDroplets03 = (props: SvgProps) => (
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
      d="M12.56 6.08A11 11 0 0 0 14 2.5c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97M7 15.78c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.23 7 4.78a6.6 6.6 0 0 1-2.29 3.76C3.56 9.46 3 10.58 3 11.73c0 2.22 1.8 4.05 4 4.05"
    />
  </Svg>
);
export default SvgDroplets03;