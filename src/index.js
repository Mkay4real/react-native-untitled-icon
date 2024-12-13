import React from "react";
import * as Icon from "./icons";
import { Text } from "react-native";

const UntitledIcon = ({
  name = "home-01",
  color = "black",
  size = 24,
  ...props
}) => {
  name = name.startsWith("ui-") ? name.substring(3) : name;

  const iconComponentName = name
    .split("-")
    .map(s => s[0].toUpperCase() + s.substr(1))
    .join("");
  const Component = Icon[iconComponentName];

  return Component ? (
    <Component
      width={size}
      height={size}
      viewBox="0 0 24 24"
      color={color || "black"}
      // fill={color || "black"}
      {...props}
    />
  ) : (
    <Text>Invalid Icon</Text>
  );
};

export default UntitledIcon;
