import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShuffle01 = (props: SvgProps) => (
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
      d="m18 15 3 3m0 0-3 3m3-3h-2.431c-.94 0-1.409 0-1.835-.13a3 3 0 0 1-1.033-.552c-.344-.283-.605-.674-1.126-1.455l-.242-.363M18 3l3 3m0 0-3 3m3-3h-2.431c-.94 0-1.409 0-1.835.13a3 3 0 0 0-1.033.552c-.344.283-.605.674-1.126 1.455l-5.15 7.726c-.521.781-.782 1.172-1.126 1.455-.304.25-.655.438-1.033.552-.426.13-.896.13-1.835.13H3M3 6h2.431c.94 0 1.409 0 1.835.13a3 3 0 0 1 1.033.552c.344.283.605.674 1.126 1.455l.242.363"
    />
  </Svg>
);
export default SvgShuffle01;
