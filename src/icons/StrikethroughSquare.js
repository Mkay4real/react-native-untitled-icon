import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStrikethroughSquare = props => (
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
      d="M6 12h12m-7 0h2a2.5 2.5 0 0 1 0 5h-2.167a2.33 2.33 0 0 1-2.18-1.5m6.694-7a2.33 2.33 0 0 0-2.18-1.5H11a2.5 2.5 0 0 0-2.292 1.5M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21"
    />
  </Svg>
);
export default SvgStrikethroughSquare;
