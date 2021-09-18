import React from "react";

import { Text as LibText } from "react-native-paper";

export type TextProps = React.ComponentProps<typeof LibText>;

const Text: React.FC<TextProps> = ({ ...rest }) => {
  return <LibText {...rest} />;
};

export default Text;
