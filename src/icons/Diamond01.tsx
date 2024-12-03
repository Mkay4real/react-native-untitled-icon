import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiamond01 = (props: SvgProps) => (
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
      d="M2.5 9h19M10 3 8 9l4 11.5L16 9l-2-6m-1.386 17.263 8.959-10.75c.152-.183.227-.274.256-.376a.5.5 0 0 0 0-.274c-.029-.102-.104-.193-.256-.375l-4.334-5.2c-.088-.106-.132-.159-.186-.197a.5.5 0 0 0-.158-.074C16.831 3 16.763 3 16.625 3h-9.25c-.138 0-.207 0-.271.017a.5.5 0 0 0-.158.074 1 1 0 0 0-.186.197l-4.334 5.2c-.151.182-.227.273-.256.375a.5.5 0 0 0 0 .274c.029.102.105.193.256.375l8.959 10.75c.211.254.316.38.443.427a.5.5 0 0 0 .343 0c.127-.047.232-.173.443-.427"
    />
  </Svg>
);
export default SvgDiamond01;
