import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHexagon02 = (props: SvgProps) => (
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
      d="M21.568 11.223c.157.284.236.425.267.575a1 1 0 0 1 0 .403c-.03.15-.11.292-.267.576l-4.111 7.4c-.167.3-.25.45-.368.558a1 1 0 0 1-.364.215c-.153.05-.324.05-.667.05H7.941c-.343 0-.514 0-.667-.05a1 1 0 0 1-.364-.215c-.118-.109-.201-.258-.368-.558l-4.11-7.4c-.158-.284-.237-.425-.268-.575a1 1 0 0 1 0-.403c.03-.15.11-.292.267-.576l4.111-7.4c.167-.3.25-.45.368-.558a1 1 0 0 1 .364-.215C7.427 3 7.598 3 7.941 3h8.117c.343 0 .514 0 .667.05a1 1 0 0 1 .364.215c.118.109.201.258.368.558z"
    />
  </Svg>
);
export default SvgHexagon02;
