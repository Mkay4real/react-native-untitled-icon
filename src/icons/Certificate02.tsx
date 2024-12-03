import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCertificate02 = (props: SvgProps) => (
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
      d="M9 18.5h6M7 15h10M5 2h14c1.105 0 2 .995 2 2.222v15.556C21 21.005 20.105 22 19 22H5c-1.105 0-2-.995-2-2.222V4.222C3 2.995 3.895 2 5 2m6.998 4.212c-.7-.78-1.867-.989-2.744-.275-.877.713-1 1.906-.312 2.75.689.844 3.056 2.813 3.056 2.813s2.366-1.97 3.055-2.813c.688-.844.58-2.044-.312-2.75s-2.044-.504-2.743.275"
    />
  </Svg>
);
export default SvgCertificate02;
