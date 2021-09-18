import React from "react";

import { Snackbar as LibSnackbar } from "react-native-paper";

export type SnackBarProps = React.ComponentProps<typeof LibSnackbar>;

const Snackbar: React.FC<SnackBarProps> = ({ ...rest }) => {
  return <LibSnackbar {...rest} />;
};

export default Snackbar;
