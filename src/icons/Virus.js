import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVirus = props => (
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
      d="M12 2v5m0-5c-.713 0-1.41.075-2.08.217M12 2c.713 0 1.41.075 2.08.217M12 7a5 5 0 0 0-5 5m5-5a5 5 0 0 1 5 5m-5 5v5m0-5a5 5 0 0 0 5-5m-5 5a5 5 0 0 1-5-5m5 10c.712 0 1.407-.075 2.077-.216M12 22q-1.074-.002-2.085-.218M4.93 4.93l3.535 3.535m7.072 7.072 3.535 3.535M2 12h5m-5 0c0 .713.075 1.41.217 2.08M2 12c0-.714.075-1.411.217-2.083M17 12h5m0 0c0-.713-.075-1.41-.217-2.08M22 12c0 .713-.075 1.409-.216 2.08M4.929 19.07l3.535-3.536m7.072-7.07 3.535-3.536m-1.624-1.317a10.05 10.05 0 0 1 2.942 2.943m-.003 10.895a10.05 10.05 0 0 1-2.941 2.94m-10.891-.002a10.1 10.1 0 0 1-2.94-2.937M3.613 6.554a10.05 10.05 0 0 1 2.94-2.942"
    />
  </Svg>
);
export default SvgVirus;