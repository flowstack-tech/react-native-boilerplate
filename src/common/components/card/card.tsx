import React from "react";

import { Card as LibCard } from "react-native-paper";

export type CardProps = React.ComponentProps<typeof LibCard>;

const Card: React.FC<CardProps> & {
  Actions: typeof LibCard.Actions;
  Content: typeof LibCard.Content;
  Cover: typeof LibCard.Cover;
  Title: typeof LibCard.Title;
} = ({ ...rest }) => {
  return <LibCard {...rest} />;
};

// Explicitly copy static props (https://www.reactandtypescript.dev/examples/functional-components#functional-components-with-static-properties, https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over)
Card.Actions = LibCard.Actions;
Card.Content = LibCard.Content;
Card.Cover = LibCard.Cover;
Card.Title = LibCard.Title;

export default Card;
