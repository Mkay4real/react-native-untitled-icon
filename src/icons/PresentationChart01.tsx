import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPresentationChart01 = (props: SvgProps) => (
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
      d="M12 16v5m0-5 6 5m-6-5-6 5M21 3v8.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 16 17.88 16 16.2 16H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 13.72 3 12.88 3 11.2V3m5 6v3m4-5v5m4-1v1m6-9H2"
    />
  </Svg>
);
export default SvgPresentationChart01;
