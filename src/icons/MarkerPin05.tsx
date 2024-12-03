import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMarkerPin05 = (props: SvgProps) => (
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
      d="M16 13.374c3.532.695 6 2.28 6 4.126 0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-1.845 2.468-3.431 6-4.126M12 17V3l5.318 3.272c.388.24.581.358.643.509a.5.5 0 0 1-.011.407c-.07.146-.271.254-.672.47L12 10.5"
    />
  </Svg>
);
export default SvgMarkerPin05;
