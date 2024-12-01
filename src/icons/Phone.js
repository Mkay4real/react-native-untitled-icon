import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPhone = props => (
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
      d="M8.38 8.853a14.6 14.6 0 0 0 2.847 4.01 14.6 14.6 0 0 0 4.01 2.847c.124.06.187.09.265.112.28.082.625.023.862-.147.067-.048.124-.105.239-.219.35-.35.524-.524.7-.639a2 2 0 0 1 2.18 0c.176.115.35.29.7.64l.195.194c.532.531.797.797.942 1.082a2 2 0 0 1 0 1.806c-.145.285-.41.551-.942 1.082l-.157.158c-.53.53-.795.794-1.155.997-.4.224-1.02.386-1.478.384-.413-.001-.695-.081-1.26-.241a19.04 19.04 0 0 1-8.283-4.874A19.04 19.04 0 0 1 3.17 7.761c-.16-.564-.24-.846-.241-1.26a3.4 3.4 0 0 1 .384-1.477c.202-.36.467-.625.997-1.155l.157-.158c.532-.53.798-.797 1.083-.941a2 2 0 0 1 1.805 0c.286.144.551.41 1.083.942l.195.194c.35.35.524.525.638.7a2 2 0 0 1 0 2.18c-.114.177-.289.352-.638.701-.115.114-.172.172-.22.238-.17.238-.228.582-.147.862.023.08.053.142.113.266"
    />
  </Svg>
);
export default SvgPhone;
