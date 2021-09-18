import React from "react";

import { ActivityIndicator as LibActivityIndicator } from "react-native-paper";

export type LoaderProps = React.ComponentProps<typeof LibActivityIndicator>;

const Loader: React.FC<LoaderProps> = ({ ...rest }) => {
  return <LibActivityIndicator {...rest} />;
};

export default Loader;
