import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./context";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

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

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withContexts(contexts));
