import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHome03 = (props: SvgProps) => (
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
      d="M9 21v-7.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 12 10.04 12 10.6 12h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 12.76 15 13.04 15 13.6V21M2 9.5l9.04-6.78c.344-.258.516-.387.705-.437a1 1 0 0 1 .51 0c.189.05.36.179.705.437L22 9.5M4 8v9.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 21 6.08 21 7.2 21h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 19.48 20 18.92 20 17.8V8l-6.08-4.56c-.688-.516-1.033-.775-1.41-.874a2 2 0 0 0-1.02 0c-.377.1-.722.358-1.41.874z"
    />
  </Svg>
);
export default SvgHome03;
