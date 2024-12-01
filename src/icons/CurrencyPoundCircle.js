import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCurrencyPoundCircle = props => (
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
      d="M15 17.5H9s2-2.256 2-5c0-1.5-1.085-2.013-1.105-3.538.002-3.018 3.635-2.857 4.898-1.658M9 12.5h5m8-.5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
    />
  </Svg>
);
export default SvgCurrencyPoundCircle;
