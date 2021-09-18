import React from "react";

import { Banner as LibBanner } from "react-native-paper";

export type BannerProps = React.ComponentProps<typeof LibBanner>;

const Banner: React.FC<BannerProps> = ({ ...rest }) => {
  return <LibBanner {...rest} />;
};

export default Banner;
