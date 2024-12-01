import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgImage02 = props => (
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
      d="m6 20 8.869-8.869c.396-.396.594-.594.822-.668a1 1 0 0 1 .618 0c.228.074.426.272.822.668l4.274 4.274M10.5 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </Svg>
);
export default SvgImage02;
