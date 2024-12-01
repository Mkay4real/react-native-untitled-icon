import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGitPullRequest = props => (
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
      d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 0V8a2 2 0 0 0-2-2h-3M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v12"
    />
  </Svg>
);
export default SvgGitPullRequest;
