import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMagicWand02 = (props: SvgProps) => (
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
      d="M15 4V2m0 14v-2M8 9h2m10 0h2m-4.2 2.8L19 13m-1.2-6.8L19 5M3 21l9-9m.2-5.8L11 5"
    />
  </Svg>
);
export default SvgMagicWand02;
