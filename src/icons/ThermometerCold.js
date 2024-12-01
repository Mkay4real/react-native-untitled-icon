import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgThermometerCold = props => (
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
      d="M2 12h10M9 4v16M3 9l3 3-3 3m9-9L9 9 6 6m0 12 3-3 1.5 1.5m9.5-1.965V4a2 2 0 1 0-4 0v10.535a4 4 0 1 0 4 0"
    />
  </Svg>
);
export default SvgThermometerCold;
