import React from "react";

import { TextInput as LibTextInput } from "react-native-paper";

export type TextInputProps = React.ComponentProps<typeof LibTextInput>;

const TextInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return <LibTextInput {...rest} />;
};

export default TextInput;
