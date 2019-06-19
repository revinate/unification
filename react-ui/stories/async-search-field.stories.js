import React from 'react';
import { storiesOf } from '@storybook/react';
import { AsyncSearchField, StyleLinksV2 } from '../src/';


storiesOf('AsyncSearchField', module)
  .add('default', () => (
    <div>
      <StyleLinksV2 />
      <AsyncSearchField
        loadOptions={text => new Promise(function(resolve) {
          if (!text) {
            resolve({});
          }
          resolve({
            options: [
              { label: text, value: text }
            ]
          });
        })}
      />
    </div>
  ));
