import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgColors = props => (
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
      d="M12 20.472a6 6 0 1 0 5.58-10.262m-11.16 0a6 6 0 1 0 7.16 3.58M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"
    />
  </Svg>
);
export default SvgColors;
