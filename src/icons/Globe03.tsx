import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlobe03 = (props: SvgProps) => (
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
      d="M12 2c3 2 3.923 6.292 4 10-.077 3.708-1 8-4 10m0-20C9 4 8.077 8.292 8 12c.077 3.708 1 8 4 10m0-20C6.477 2 2 6.477 2 12M12 2c5.523 0 10 4.477 10 10M12 22c5.523 0 10-4.477 10-10M12 22C6.477 22 2 17.523 2 12m20 0c-2 3-6.292 3.923-10 4-3.708-.077-8-1-10-4m20 0c-2-3-6.292-3.923-10-4-3.708.077-8 1-10 4"
    />
  </Svg>
);
export default SvgGlobe03;
