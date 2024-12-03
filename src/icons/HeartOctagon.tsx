import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartOctagon = (props: SvgProps) => (
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
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.997 9.068c-1-1.169-2.667-1.483-3.92-.413-1.252 1.07-1.429 2.86-.445 4.125.63.81 2.244 2.314 3.322 3.29.359.325.538.487.753.552.184.056.395.056.58 0 .214-.065.393-.227.752-.552 1.079-.976 2.692-2.48 3.322-3.29.984-1.265.829-3.066-.445-4.125s-2.92-.756-3.92.413"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHeartOctagon;
