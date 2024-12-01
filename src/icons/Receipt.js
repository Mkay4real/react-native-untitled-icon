import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReceipt = props => (
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
      d="M4 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 3 7.12 3 8.8 3h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 5.28 20 6.12 20 7.8V21l-2.75-2-2.5 2L12 19l-2.75 2-2.5-2L4 21z"
    />
  </Svg>
);
export default SvgReceipt;