import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRecording01 = props => (
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
      d="M3 10v4m4.5-8v12M12 3v18m4.5-15v12m4.5-8v4"
    />
  </Svg>
);
export default SvgRecording01;
