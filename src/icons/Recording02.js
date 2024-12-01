import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRecording02 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10v4m4.5-3v2M12 6v12m4.5-15v18M21 10v4"
    />
  </Svg>
);
export default SvgRecording02;
