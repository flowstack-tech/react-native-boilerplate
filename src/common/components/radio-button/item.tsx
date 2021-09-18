import React from "react";

import { RadioButton as LibRadioButton } from "react-native-paper";

export type RadioButtonItemProps = React.ComponentProps<typeof LibRadioButton.Item>;

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({ ...rest }) => {
  return <LibRadioButton.Item {...rest} />;
};

export default RadioButtonItem;
