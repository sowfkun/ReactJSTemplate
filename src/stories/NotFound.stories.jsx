import NotFound from 'components/NotFound/NotFound';
import React from 'react';

export default {
  title: 'NotFound',
  component: NotFound,
};

const Template = (args) => <NotFound {...args} />;

export const Example = Template.bind({});
Example.args = {};
