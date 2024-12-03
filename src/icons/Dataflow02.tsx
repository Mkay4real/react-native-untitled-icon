import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDataflow02 = (props: SvgProps) => (
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
      d="M12 4v11.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C14.28 20 15.12 20 16.8 20h.2m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 4h10M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-5 8h5m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </Svg>
);
export default SvgDataflow02;
