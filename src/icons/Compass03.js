import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCompass03 = props => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.722 8.266c.489-.163.733-.244.895-.186a.5.5 0 0 1 .303.303c.058.162-.023.406-.186.895l-1.488 4.463c-.046.139-.07.208-.109.266a.5.5 0 0 1-.13.13c-.058.04-.127.063-.266.11l-4.463 1.487c-.489.163-.733.244-.895.186a.5.5 0 0 1-.303-.303c-.058-.162.023-.406.186-.895l1.488-4.462c.046-.14.07-.21.109-.267a.5.5 0 0 1 .13-.13c.058-.04.127-.063.266-.11z"
    />
  </Svg>
);
export default SvgCompass03;
