import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTag02 = (props: SvgProps) => (
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
      d="M8 8h.01M4.563 2.937 2.937 4.563c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.579C2 6.092 2 6.336 2 6.825v2.85c0 .489 0 .733.055.963.05.204.13.4.24.579.123.201.296.374.642.72l7.669 7.669c1.188 1.188 1.782 1.782 2.467 2.004a3 3 0 0 0 1.854 0c.685-.222 1.28-.816 2.467-2.004l2.212-2.212c1.188-1.188 1.782-1.782 2.004-2.467a3 3 0 0 0 0-1.854c-.222-.685-.816-1.28-2.004-2.467l-7.669-7.669c-.346-.346-.519-.519-.72-.642a2 2 0 0 0-.578-.24C10.409 2 10.164 2 9.675 2h-2.85c-.489 0-.733 0-.963.055a2 2 0 0 0-.579.24c-.201.123-.374.296-.72.642M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </Svg>
);
export default SvgTag02;
