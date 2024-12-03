import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNavigationPointer02 = (props: SvgProps) => (
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
      d="M5.037 21.325c-.585.258-.877.386-1.057.33a.5.5 0 0 1-.326-.327c-.057-.179.071-.471.328-1.056L11.263 3.67c.232-.528.348-.792.51-.873a.5.5 0 0 1 .446 0c.162.081.278.345.51.873l7.281 16.602c.257.585.385.877.328 1.056a.5.5 0 0 1-.326.327c-.18.056-.472-.072-1.057-.33l-6.637-2.92c-.118-.052-.178-.078-.24-.089a.5.5 0 0 0-.164 0c-.062.01-.121.037-.24.089z"
    />
  </Svg>
);
export default SvgNavigationPointer02;
