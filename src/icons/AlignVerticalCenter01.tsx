import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlignVerticalCenter01 = (props: SvgProps) => (
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
      d="M3 12h18M12 2v6.5m0 0 4-4m-4 4-4-4M12 22v-6.5m0 0 4 4m-4-4-4 4"
    />
  </Svg>
);
export default SvgAlignVerticalCenter01;
