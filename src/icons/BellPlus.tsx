import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBellPlus = (props: SvgProps) => (
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
      d="M9.354 21c.705.622 1.632 1 2.646 1s1.94-.378 2.646-1M18 8V2m-3 3h6m-8-2.916A6 6 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H18.61c1.196 0 1.794 0 1.927-.098.147-.11.186-.179.2-.361.014-.165-.353-.755-1.088-1.936-.492-.79-.955-1.81-1.264-3.105"
    />
  </Svg>
);
export default SvgBellPlus;