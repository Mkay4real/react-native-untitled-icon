import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMedicalSquare = props => (
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
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.833 7.3c0-.28 0-.42-.054-.527a.5.5 0 0 0-.219-.218c-.107-.055-.247-.055-.527-.055h-2.066c-.28 0-.42 0-.527.054a.5.5 0 0 0-.219.219c-.054.107-.054.247-.054.527v2.067c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218c-.107.055-.247.055-.527.055H7.3c-.28 0-.42 0-.527.054a.5.5 0 0 0-.218.219c-.055.107-.055.247-.055.527v2.066c0 .28 0 .42.054.527a.5.5 0 0 0 .219.219c.107.054.247.054.527.054h2.067c.28 0 .42 0 .527.055.094.048.17.124.218.218.055.107.055.247.055.527V16.7c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218c.107.055.247.055.527.055h2.066c.28 0 .42 0 .527-.055a.5.5 0 0 0 .219-.218c.054-.107.054-.247.054-.527v-2.067c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218c.107-.055.247-.055.527-.055H16.7c.28 0 .42 0 .527-.054a.5.5 0 0 0 .218-.219c.055-.107.055-.247.055-.527v-2.066c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.219c-.107-.054-.247-.054-.527-.054h-2.067c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218c-.055-.107-.055-.247-.055-.527z"
    />
  </Svg>
);
export default SvgMedicalSquare;