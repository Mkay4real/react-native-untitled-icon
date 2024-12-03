import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBracketsCheck = (props: SvgProps) => (
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
      d="M18.57 20a2.286 2.286 0 0 0 2.287-2.286v-4.571L22 12l-1.143-1.143V6.286A2.285 2.285 0 0 0 18.57 4M5.429 4a2.285 2.285 0 0 0-2.286 2.286v4.571L2 12l1.143 1.143v4.571A2.285 2.285 0 0 0 5.429 20M7.5 12l2.434 2.434c.198.198.297.297.412.334.1.033.208.033.309 0 .114-.037.213-.136.41-.334L16.5 9"
    />
  </Svg>
);
export default SvgBracketsCheck;
