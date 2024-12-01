import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFaceNeutral = props => (
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
      d="M8 15h8m-1-6h.01M9 9h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-6.5-3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </Svg>
);
export default SvgFaceNeutral;
