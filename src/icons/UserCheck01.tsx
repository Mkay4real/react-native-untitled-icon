import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserCheck01 = (props: SvgProps) => (
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
      d="M12 15.5H7.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C2 18.907 2 19.604 2 21m14-3 2 2 4-4m-7.5-8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
    />
  </Svg>
);
export default SvgUserCheck01;
