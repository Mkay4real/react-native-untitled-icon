import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgItalic02 = props => (
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
      d="m13.25 4-6 16m9.5-16-6 16M19.5 4h-10m5 16h-10"
    />
  </Svg>
);
export default SvgItalic02;
