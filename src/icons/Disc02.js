import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDisc02 = props => (
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
      d="M15 5.674A7 7 0 0 1 19 12M8.392 18A7 7 0 0 1 5 12m17 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </Svg>
);
export default SvgDisc02;
