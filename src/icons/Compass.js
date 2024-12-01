import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCompass = props => (
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
      d="M12 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 0V2m9 12.938A11.97 11.97 0 0 1 12 19a11.97 11.97 0 0 1-9-4.062m7.745-6.276L3 22M13.255 8.662 21 22"
    />
  </Svg>
);
export default SvgCompass;
