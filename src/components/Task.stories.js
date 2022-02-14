import React from "react";

import {Task} from "./Task";

export default {
    component: Task,
    title: 'Task'
}

const Template = args => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK INBOX',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    }
};

export const Pinned = Template.bind({});
Pinned.args = {
   task: {
       ...Default.args.task,
       state: 'TASK PINNED',

   }
}

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK ARCHIVED',
    }
}
