import React from "react";

import { Appbar as LibAppbar } from "react-native-paper";

export type AppbarProps = React.ComponentProps<typeof LibAppbar>;

const Appbar: React.FC<AppbarProps> & {
  Action: typeof LibAppbar.Action;
  BackAction: typeof LibAppbar.BackAction;
  Content: typeof LibAppbar.Content;
  Header: typeof LibAppbar.Header;
} = ({ ...rest }) => {
  return <LibAppbar {...rest} />;
};

// Explicitly copy static props (https://www.reactandtypescript.dev/examples/functional-components#functional-components-with-static-properties, https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over)
Appbar.Action = LibAppbar.Action;
// TODO: Replace with custom implementation after navigation setup
Appbar.BackAction = LibAppbar.BackAction;
Appbar.Content = LibAppbar.Content;
Appbar.Header = LibAppbar.Header;

export default Appbar;
