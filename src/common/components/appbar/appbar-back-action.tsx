import React from "react";

import { Appbar as LibAppbar, useTheme } from "react-native-paper";

/**
 * Use shouldNavigate to control navigation decision or just perform some actions before going back.
 * Use onPress to override default back behaviour.
 */
export type AppbarBackActionProps = React.ComponentProps<typeof LibAppbar.BackAction>;

const AppbarBackAction = ({ ...rest }: AppbarBackActionProps) => {
  const { colors } = useTheme();

  // TODO: Setup Navigation

  return <LibAppbar.BackAction color={colors.text} {...rest} />;
};

AppbarBackAction.displayName = "Appbar.BackAction";

export default AppbarBackAction;
