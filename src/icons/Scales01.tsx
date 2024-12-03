import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScales01 = (props: SvgProps) => (
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
      d="M2 17v-.15c0-.317 0-.475.024-.63a2 2 0 0 1 .107-.4c.055-.146.134-.283.29-.558L6 9m-4 8a4 4 0 0 0 8 0m-8 0v-.2c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218C2.38 16 2.52 16 2.8 16h6.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.2M6 9l3.578 6.262c.157.275.236.412.291.558a2 2 0 0 1 .107.4c.024.155.024.313.024.63V17M6 9l12-2m-4 8v-.15c0-.317 0-.475.024-.63q.033-.205.107-.4c.055-.146.134-.283.29-.558L18 7m-4 8a4 4 0 0 0 8 0m-8 0v-.2c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C14.38 14 14.52 14 14.8 14h6.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.2m-4-8 3.578 6.262c.157.275.236.412.291.558q.075.196.107.4c.024.155.024.313.024.63V15M12 3v5"
    />
  </Svg>
);
export default SvgScales01;