import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpeaker03 = (props: SvgProps) => (
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
      d="M18 18v2.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C17.24 22 16.96 22 16.4 22H7.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C6 21.24 6 20.96 6 20.4V18m6-8h.01M7.8 18h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 15.72 21 14.88 21 13.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 2 17.88 2 16.2 2H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 4.28 3 5.12 3 6.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 18 6.12 18 7.8 18m9.2-8a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-4.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </Svg>
);
export default SvgSpeaker03;