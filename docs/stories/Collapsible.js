import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CollapsibleAccordion from '../../examples/CollapsibleAccordion';
import CollapsibleBasic from '../../examples/CollapsibleBasic';
import CollapsiblePopout from '../../examples/CollapsiblePopout';

const info = `
  Collapsibles are accordion elements that expand when clicked on.
  They allow you to hide content that is not immediately relevant to the user.

  ~~~js
    <Collapsible>
      <CollapsibleItem>
        ...
      </CollapsibleItem>
    </Collapsible>;
  ~~~
`;

storiesOf('JS', module)
  .add('Collapsible - basic', withInfo(info)(() => CollapsibleBasic))
  .add('Collapsible - accordion', withInfo(info)(() => CollapsibleAccordion))
  .add('Collapsible - popout', withInfo(info)(() => CollapsiblePopout));
