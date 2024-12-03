import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoonStar = (props: SvgProps) => (
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
      d="m18 2 .618 1.236c.265.53.398.796.575 1.026q.237.307.545.545c.23.177.495.31 1.026.575L22 6l-1.236.618c-.53.265-.796.398-1.026.575q-.307.237-.545.545c-.177.23-.31.495-.575 1.026L18 10l-.618-1.236c-.265-.53-.398-.796-.575-1.026a3 3 0 0 0-.545-.545c-.23-.177-.495-.31-1.026-.575L14 6l1.236-.618c.53-.265.796-.398 1.026-.575q.307-.237.545-.545c.177-.23.31-.495.575-1.026zM21 13.39A7.617 7.617 0 1 1 10.612 3C5.78 3.458 2 7.527 2 12.479A9.52 9.52 0 0 0 11.522 22c4.95 0 9.02-3.78 9.478-8.61"
    />
  </Svg>
);
export default SvgMoonStar;