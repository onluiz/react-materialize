import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Autocomplete from '../../examples/Autocomplete';

const info = `
  Add an autocomplete dropdown below your input to suggest possible values.

  ~~~js
  <Autocomplete
    title='Company' // placeholder
    data={ // data to autocomplete from
      {
        'Apple': null,
        'Microsoft': null,
        'Google': 'http://placehold.it/250x250'
      }
    }
  />
  ~~~
`;

storiesOf('JS', module)
  .add('Autocomplete', withInfo(info)(() => Autocomplete));
