import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLuggage01 = (props: SvgProps) => (
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
      d="M8 22v-2m1.5-5V7M16 22v-2m-1.5-5V7M8.8 20h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 17.72 20 16.88 20 15.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 20 7.12 20 8.8 20"
    />
  </Svg>
);
export default SvgLuggage01;
