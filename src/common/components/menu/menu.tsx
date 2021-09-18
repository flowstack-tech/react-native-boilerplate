import React from "react";

import { Menu as LibMenu } from "react-native-paper";

import MenuItem from "./item";

export type MenuProps = React.ComponentProps<typeof LibMenu>;

const Menu: React.FC<MenuProps> & {
  Item: typeof LibMenu.Item;
} = ({ ...rest }) => {
  return <LibMenu {...rest} />;
};

// Explicitly copy static props (https://www.reactandtypescript.dev/examples/functional-components#functional-components-with-static-properties, https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over)
Menu.Item = MenuItem;

export default Menu;
