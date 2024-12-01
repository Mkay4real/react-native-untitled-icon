import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBeaker01 = props => (
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
      d="M10 2v4.66c0 .218 0 .326-.033.413a.5.5 0 0 1-.138.198c-.07.06-.183.102-.409.185a7.5 7.5 0 1 0 5.16 0c-.226-.083-.339-.125-.409-.185a.47.47 0 0 1-.138-.198C14 6.986 14 6.878 14 6.66V2M8.5 2h7"
    />
  </Svg>
);
export default SvgBeaker01;
