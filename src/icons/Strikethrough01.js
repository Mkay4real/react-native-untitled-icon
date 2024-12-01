import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStrikethrough01 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 16a4 4 0 0 0 4 4h4a4 4 0 0 0 0-8m4-4a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4m-3 4h18"
    />
  </Svg>
);
export default SvgStrikethrough01;
