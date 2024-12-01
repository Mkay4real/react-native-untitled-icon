import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgItalic01 = props => (
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
      d="M19 4h-9m4 16H5M15 4 9 20"
    />
  </Svg>
);
export default SvgItalic01;
