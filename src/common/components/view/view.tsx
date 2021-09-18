import React from "react";
import { View as LibView, ViewProps } from "react-native";

const View: React.FC<ViewProps> = ({ ...rest }) => {
  return <LibView {...rest} />;
};

export type { ViewProps };
export default View;
