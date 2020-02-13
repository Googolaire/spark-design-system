import React from 'react';
import SprkHeading from './SprkHeading';
import { markdownDocumentationLinkBuilder } from '../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Foundations/Heading',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkHeading,
  parameters: {
    jest: ['SprkHeading'],
    info: `
${markdownDocumentationLinkBuilder('typography', 'foundations')}

##### Line-height Collision

By default, line height on type will create extra
whitespace around the top and bottom of the text.
When the text is in a container that has padding applied,
it appears larger than intended, due to this extra
whitespace.

Spark automatically removes this whitespace from headings,
but it will only be removed on body copy if the Spark
body classes are used.

For details on how we remove the whitespace, please see this article:
[Cropping Away Negative Impacts of Line Height](https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce)

The type sizes defined in Spark all have this extra
whitespace removed. Heading elements have this cropping
automatically applied, where body copy will need the
correct type classes applied.
`,
  },
};

export const pageTitle = () => (
  <SprkHeading
    element="h1"
    variant="two"
    isPageTitle
    idString="heading-page-title"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayOne = () => (
  <SprkHeading
    element="h1"
    variant="one"
    idString="heading-one"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayTwo = () => (
  <SprkHeading
    element="h2"
    variant="two"
    idString="heading-two"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayThree = () => (
  <SprkHeading
    element="h3"
    variant="three"
    idString="heading-three"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayFour = () => (
  <SprkHeading
    element="h4"
    variant="four"
    idString="heading-four"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displayFive = () => (
  <SprkHeading
    element="h5"
    variant="five"
    idString="heading-five"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displaySix = () => (
  <SprkHeading
    element="h6"
    variant="six"
    idString="heading-six"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);

export const displaySeven = () => (
  <SprkHeading
    element="h6"
    variant="seven"
    idString="heading-seven"
  >
    The Quick Brown Fox Jumps Over the Lazy Dog
  </SprkHeading>
);