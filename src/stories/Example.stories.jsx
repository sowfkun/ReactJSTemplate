import React from 'react';

import ExampleComponent from '../components/example/Example';

export default {
  title: 'Example',
  component: ExampleComponent,
};

const Template = (args) => <ExampleComponent {...args} />;

export const Example = Template.bind({});
Example.args = {};
