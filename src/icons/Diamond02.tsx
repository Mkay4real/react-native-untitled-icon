import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiamond02 = (props: SvgProps) => (
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
      d="M5 22h14M2.5 8h19M10 2 8 8l4 10.5L16 8l-2-6m-1.408 16.349 8.94-9.834c.166-.182.249-.274.282-.378a.5.5 0 0 0 .006-.282c-.028-.106-.108-.2-.265-.39L17.24 2.288c-.088-.106-.132-.159-.186-.197a.5.5 0 0 0-.158-.074C16.832 2 16.763 2 16.626 2H7.375c-.138 0-.207 0-.27.017a.5.5 0 0 0-.158.074 1 1 0 0 0-.187.197L2.446 7.465c-.158.19-.237.284-.265.39a.5.5 0 0 0 .006.282c.033.104.116.196.282.378l8.94 9.834c.205.226.307.338.428.38a.5.5 0 0 0 .327 0c.12-.041.223-.154.428-.38"
    />
  </Svg>
);
export default SvgDiamond02;
