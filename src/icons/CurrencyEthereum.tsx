import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyEthereum = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4 11 8 2 8-2M4 11l8-9m-8 9 8-2m8 2-8-9m8 9-8-2m0-7v7m-6.5 6 6.5 7 6.5-7-6.5 1.5z"
    />
  </Svg>
);
export default SvgCurrencyEthereum;
