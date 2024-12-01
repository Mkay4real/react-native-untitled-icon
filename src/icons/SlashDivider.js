import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSlashDivider = props => (
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
      d="M7 22 17 2"
    />
  </Svg>
);
export default SvgSlashDivider;
