import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgImageLeft = props => (
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
      d="m19 8-3-3m0 0 3-3m-3 3h6m-9.5-2H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21H17c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.122C21 18.396 21 17.93 21 17M10.5 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4.49 3.418-8.459 7.69c-.476.433-.714.649-.735.836a.5.5 0 0 0 .167.431C6.105 21 6.426 21 7.07 21h9.387c1.44 0 2.159 0 2.724-.242a3 3 0 0 0 1.578-1.578c.242-.565.242-1.285.242-2.724 0-.484 0-.726-.053-.952a2 2 0 0 0-.374-.778c-.143-.182-.332-.333-.71-.636l-2.797-2.237c-.379-.303-.568-.454-.776-.508a1 1 0 0 0-.557.018c-.205.066-.384.23-.743.555"
    />
  </Svg>
);
export default SvgImageLeft;
