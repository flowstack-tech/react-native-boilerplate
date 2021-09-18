import React from "react";

import { BottomNavigation as LibBottomNavigation } from "react-native-paper";

export type BottomNavigationProps = React.ComponentProps<typeof LibBottomNavigation>;

const BottomNavigation: React.FC<BottomNavigationProps> & {
  SceneMap: typeof LibBottomNavigation.SceneMap;
} = ({ ...rest }) => {
  return <LibBottomNavigation {...rest} />;
};

// Explicitly copy static props (https://www.reactandtypescript.dev/examples/functional-components#functional-components-with-static-properties, https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over)
BottomNavigation.SceneMap = LibBottomNavigation.SceneMap;

export default BottomNavigation;
