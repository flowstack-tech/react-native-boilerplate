import React from "react";

import { RadioButton as LibRadioButton } from "react-native-paper";

import RadioButtonItem from "./item";

export type RadioButtonProps = React.ComponentProps<typeof LibRadioButton>;

const RadioButton: React.FC<RadioButtonProps> & {
  Android: typeof LibRadioButton.Android;
  Group: typeof LibRadioButton.Group;
  IOS: typeof LibRadioButton.IOS;
  Item: typeof RadioButtonItem;
} = ({ ...rest }) => {
  return <LibRadioButton {...rest} />;
};

// Explicitly copy static props (https://www.reactandtypescript.dev/examples/functional-components#functional-components-with-static-properties, https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over)
RadioButton.Android = LibRadioButton.Android;
RadioButton.IOS = LibRadioButton.IOS;
RadioButton.Group = LibRadioButton.Group;
RadioButton.Item = RadioButtonItem;

export default RadioButton;
