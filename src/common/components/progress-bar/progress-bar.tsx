import React from "react";

import { ProgressBar as LibProgressBar } from "react-native-paper";

export type ProgressBarProps = React.ComponentProps<typeof LibProgressBar>;

const ProgressBar: React.FC<ProgressBarProps> = ({ ...rest }) => {
  return <LibProgressBar {...rest} />;
};

export default ProgressBar;
