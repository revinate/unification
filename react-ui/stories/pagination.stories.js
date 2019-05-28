import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Pagination, StyleLinksV2 } from '../src/';

storiesOf('Pagination', module)
  .add('simple', () => (
    <div>
      <StyleLinksV2 />
      <Pagination
        total={10}
        pageSize={1}
        onChange={action('onChange')}
      />
    </div>
  ));
