import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCurrencyRupee = props => (
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
      d="M6 3h12M6 8h12m-3.5 13L6 13h3c6.667 0 6.667-10 0-10"
    />
  </Svg>
);
export default SvgCurrencyRupee;
