import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRss02 = (props: SvgProps) => (
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
      d="M3 13.023c5.185-.78 8.756 2.792 7.977 7.977M3 8.038c7.938-.78 13.742 5.024 12.962 12.962M3 3.052C13.692 2.274 21.726 10.308 20.948 21M5 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
    />
  </Svg>
);
export default SvgRss02;
