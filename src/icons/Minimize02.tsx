import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMinimize02 = (props: SvgProps) => (
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
      d="M3 8h.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311C8 5.72 8 4.88 8 3.2V3M3 16h.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.31 1.311C8 18.28 8 19.12 8 20.8v.2m8-18v.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.311C18.28 8 19.12 8 20.8 8h.2m-5 13v-.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.31-1.311C18.28 16 19.12 16 20.8 16h.2"
    />
  </Svg>
);
export default SvgMinimize02;
