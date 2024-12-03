import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFeather = (props: SvgProps) => (
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
      d="M16 8 2 22m16-7H9m-2.4 4h6.737c.245 0 .367 0 .482-.028a1 1 0 0 0 .29-.12c.1-.061.187-.148.36-.32L19.5 13.5c.239-.239.358-.358.455-.464a6 6 0 0 0 0-8.072A15 15 0 0 0 19.5 4.5c-.239-.239-.358-.358-.464-.455a6 6 0 0 0-8.072 0c-.106.097-.225.216-.464.455L5.469 9.531c-.173.173-.26.26-.322.36a1 1 0 0 0-.12.29C5 10.296 5 10.418 5 10.663V17.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11"
    />
  </Svg>
);
export default SvgFeather;
