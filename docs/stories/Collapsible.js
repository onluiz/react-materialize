import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Accordion from '../../examples/Accordion';

const info = `
  We are using a standard 12 column fluid responsive grid system.
  The grid helps you layout your page in an ordered, easy fashion.

  ~~~js
    <Row>
      <Col s={12} m={6} l={2}>
        ...
      </Col>
    </Row>
  ~~~
`;

storiesOf('JS', module)
  .add('Collapsible (accordion)', withInfo(info)(() => Accordion));
