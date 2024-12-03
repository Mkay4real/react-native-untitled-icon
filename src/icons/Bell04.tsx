import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBell04 = (props: SvgProps) => (
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
      d="M14.391 18.015a3 3 0 0 1-5.796 1.553M10.892 5.74a2.5 2.5 0 1 0-3.47.93m8.814 2.775c-.357-1.333-1.31-2.447-2.65-3.097-1.338-.651-2.954-.785-4.492-.373-1.537.411-2.869 1.336-3.703 2.569-.835 1.233-1.103 2.674-.746 4.006.59 2.204.476 3.963.103 5.299-.425 1.523-.638 2.284-.58 2.437.065.175.113.223.287.29.152.06.792-.112 2.072-.455l11.865-3.179c1.28-.343 1.919-.514 2.021-.642.117-.145.135-.21.104-.395-.027-.16-.591-.714-1.721-1.82-.991-.971-1.97-2.436-2.56-4.64"
    />
  </Svg>
);
export default SvgBell04;