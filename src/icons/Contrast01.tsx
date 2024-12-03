import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgContrast01 = (props: SvgProps) => (
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
      d="M12 2q.889 0 1.735.15M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10m0-20v20m5.738-18.191c.954.67 1.786 1.502 2.455 2.456m1.657 4a10 10 0 0 1 0 3.47m-1.66 4.006c-.67.952-1.5 1.782-2.453 2.45m-4.004 1.66q-.845.148-1.733.149"
    />
  </Svg>
);
export default SvgContrast01;
