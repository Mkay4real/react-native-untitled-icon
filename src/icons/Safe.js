import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSafe = props => (
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
      d="M6 21h3m6 0h3m-.5-14.5v8M3 6.2v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 18 5.08 18 6.2 18h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 16.48 21 15.92 21 14.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 3 18.92 3 17.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2m8.5 4.3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </Svg>
);
export default SvgSafe;
