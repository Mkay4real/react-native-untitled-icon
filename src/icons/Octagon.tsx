import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOctagon = (props: SvgProps) => (
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
      d="M7.391 2.469c.173-.173.26-.26.36-.322a1 1 0 0 1 .29-.12C8.156 2 8.278 2 8.523 2h6.954c.245 0 .367 0 .482.028a1 1 0 0 1 .29.12c.1.061.187.148.36.32l4.922 4.923c.173.173.26.26.322.36q.082.136.12.29c.027.115.027.237.027.482v6.954c0 .245 0 .367-.028.482a1 1 0 0 1-.12.29c-.061.1-.148.187-.32.36l-4.923 4.922c-.173.173-.26.26-.36.322a1 1 0 0 1-.29.12c-.115.027-.237.027-.482.027H8.523c-.245 0-.367 0-.482-.028a1 1 0 0 1-.29-.12c-.1-.061-.187-.148-.36-.32L2.47 16.608c-.173-.173-.26-.26-.322-.36a1 1 0 0 1-.12-.29C2 15.844 2 15.722 2 15.477V8.523c0-.245 0-.367.028-.482a1 1 0 0 1 .12-.29c.061-.1.148-.187.32-.36z"
    />
  </Svg>
);
export default SvgOctagon;