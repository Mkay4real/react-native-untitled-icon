import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCornerLeftDown = props => (
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
      d="M21 4h-3.4c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622C8 8.56 8 10.24 8 13.6V20m0 0 5-5m-5 5-5-5"
    />
  </Svg>
);
export default SvgCornerLeftDown;
