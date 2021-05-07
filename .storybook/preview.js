import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./context";

addParameters({
  backgrounds: {
    default: 'Default theme',
    values: [
      {
        name: 'Default theme',
        value: '#ffffff',
      },
      {
        name: 'Dark theme',
        value: '#050449',
      },
    ],
  },
});

addDecorator(withContexts(contexts));
