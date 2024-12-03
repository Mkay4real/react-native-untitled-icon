import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTool02 = (props: SvgProps) => (
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
      d="m6 6 4.5 4.5M6 6H3L2 3l1-1 3 1zm13.259-3.259-2.628 2.628c-.396.396-.594.594-.668.822a1 1 0 0 0 0 .618c.074.228.272.426.668.822l.238.238c.396.396.594.594.822.668a1 1 0 0 0 .618 0c.228-.074.426-.272.822-.668L21.59 5.41a5.5 5.5 0 0 1-6.16 7.485c-.485-.096-.729-.144-.876-.13a.84.84 0 0 0-.373.114c-.13.07-.261.201-.523.463L6.5 20.5a2.121 2.121 0 0 1-3-3l7.157-7.157c.262-.262.393-.393.463-.524a.84.84 0 0 0 .113-.372c.015-.148-.033-.39-.129-.877a5.5 5.5 0 0 1 8.155-5.83M12 15l5.5 5.5a2.121 2.121 0 0 0 3-3l-4.525-4.525a5.5 5.5 0 0 1-.934-.17c-.39-.107-.816-.03-1.101.255z"
    />
  </Svg>
);
export default SvgTool02;
