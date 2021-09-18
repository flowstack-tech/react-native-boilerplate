import React from "react";

import { Menu as LibMenu } from "react-native-paper";

export type MenuItemProps = React.ComponentProps<typeof LibMenu.Item>;

const MenuItem: React.FC<MenuItemProps> = ({ ...rest }) => {
  return <LibMenu.Item {...rest} />;
};

export default MenuItem;
