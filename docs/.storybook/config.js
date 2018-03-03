import { addDecorator, configure } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { setDefaults } from '@storybook/addon-info';
import WrapperDecorator from './wrapper';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'React Materialize',
  url: 'https://react-materialize.github.io',
  goFullScreen: false, // show story component as full screen
  showStoriesPanel: true, // display panel that shows a list of stories
  showAddonPanel: false, // display panel that shows addon configurations
  showSearchBox: false, // display floating search box to search through stories
  addonPanelInRight: false, // show addon panel as a vertical panel on the right
  sortStoriesByKind: false, // sorts stories
  sidebarAnimations: true // sidebar tree animations
});

// const context = require.context('../', true, /Screen\.js$/);

import jquery from '../../node_modules/jquery';
global.$ = jquery;
global.jQuery =  jquery;
require('../../node_modules/materialize-css');

import '../../node_modules/materialize-css/dist/css/materialize.css';

// addon-info
setDefaults({
  header: true,
  styles: {}, // https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19
  inline: true
});

addDecorator(WrapperDecorator);
// addDecorator(centered); // TODO add some custom style

function loadStories() {
  const req = require.context('../stories', true, /.js$/);
  req.keys().forEach((filename) => req(filename));
  // require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
