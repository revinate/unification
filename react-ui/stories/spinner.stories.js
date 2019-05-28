import React from 'react';
import { storiesOf } from '@storybook/react';
import { Spinner, StyleLinksV2 } from '../src/';

storiesOf('Sinner', module)
  .add('default', () => (
    <div>
      <StyleLinksV2 />
      <Spinner />
    </div>
  ));
