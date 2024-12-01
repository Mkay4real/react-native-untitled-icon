import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRepeat01 = props => (
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
      d="m17 2 4 4m0 0-4 4m4-4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 8.28 3 9.12 3 10.8v.2m0 7h13.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 15.72 21 14.88 21 13.2V13M3 18l4 4m-4-4 4-4"
    />
  </Svg>
);
export default SvgRepeat01;
