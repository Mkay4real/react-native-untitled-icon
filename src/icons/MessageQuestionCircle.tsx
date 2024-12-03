import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMessageQuestionCircle = (props: SvgProps) => (
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
      d="M10.5 9.002a2.248 2.248 0 0 1 4.369.75C14.869 11.25 12.62 12 12.62 12m.028 3h.01m-.16 5a8.5 8.5 0 1 0-8.056-5.783c.108.32.162.481.172.604a.9.9 0 0 1-.028.326c-.03.12-.098.245-.232.494l-1.636 3.027c-.233.432-.35.648-.324.815a.5.5 0 0 0 .234.35c.144.087.388.062.876.011l5.121-.529c.155-.016.233-.024.303-.021s.12.009.187.024c.069.016.155.05.329.116A8.5 8.5 0 0 0 12.5 20"
    />
  </Svg>
);
export default SvgMessageQuestionCircle;
