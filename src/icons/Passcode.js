import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPasscode = props => (
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
      d="M12 12h.005M17 12h.005M7 12h.005M5.2 7h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 8.52 22 9.08 22 10.2v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 17 19.92 17 18.8 17H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 15.48 2 14.92 2 13.8v-3.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 7 4.08 7 5.2 7m7.05 5a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m5 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m-10 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"
    />
  </Svg>
);
export default SvgPasscode;