import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMessageHeartSquare = (props: SvgProps) => (
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
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v5.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 18 17.88 18 16.2 18h-2.516c-.624 0-.936 0-1.235.061a3 3 0 0 0-.761.267c-.272.14-.516.334-1.003.724L8.3 20.96c-.416.333-.624.5-.8.5a.5.5 0 0 1-.39-.188C7 21.135 7 20.868 7 20.336V18c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C3 15.395 3 14.93 3 14z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.997 7.7c-.9-1.04-2.4-1.319-3.527-.368-1.128.952-1.286 2.542-.401 3.667.548.697 1.925 1.97 2.893 2.838.356.319.533.478.747.542.183.055.393.055.576 0 .213-.064.391-.223.747-.542.968-.868 2.345-2.14 2.893-2.838a2.606 2.606 0 0 0-.4-3.667c-1.147-.941-2.628-.672-3.528.367"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMessageHeartSquare;