import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEraser = (props: SvgProps) => (
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
      d="m18 13-7-7m10 15H8m2.937-.937 8.668-8.669c1.189-1.188 1.782-1.782 2.005-2.467a3 3 0 0 0 0-1.854c-.223-.685-.816-1.279-2.005-2.467l-.211-.212c-1.188-1.188-1.782-1.782-2.467-2.004a3 3 0 0 0-1.854 0c-.686.222-1.28.816-2.468 2.004l-8.211 8.212c-1.188 1.188-1.782 1.782-2.005 2.467a3 3 0 0 0 0 1.854c.223.685.817 1.28 2.005 2.467l.668.669c.346.346.52.519.721.642q.27.165.578.24c.23.055.475.055.964.055h1.35c.488 0 .733 0 .963-.055.204-.05.4-.13.578-.24.202-.123.375-.296.72-.642"
    />
  </Svg>
);
export default SvgEraser;