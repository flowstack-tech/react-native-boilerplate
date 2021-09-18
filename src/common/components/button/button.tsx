import React from "react";

import { Button as LibButton } from "react-native-paper";

export type ButtonProps = React.ComponentProps<typeof LibButton>;

const Button: React.FC<ButtonProps> = ({ mode = "contained", ...rest }) => {
  return <LibButton {...rest} mode={mode} />;
};

export default Button;
