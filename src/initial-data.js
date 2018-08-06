const initialData = {
	tasks: {
		'task-1': { id: 'task-1', content: 'Take out the garbage' },
		'task-2': { id: 'task-2', content: 'Watch my favorite show' },
		'task-3': { id: 'task-3', content: 'Charge my phone' },
		'task-4': { id: 'task-4', content: 'Cook dinner' },
		'task-5': { id: 'task-5', content: 'Cook dinner 2' },
		'task-6': { id: 'task-6', content: 'Cook dinner 3' },
		'task-7': { id: 'task-7', content: 'Cook dinner 4' },
		'task-8': { id: 'task-8', content: 'Cook dinner 5' },
		'task-9': { id: 'task-9', content: 'Cook dinner 6' },
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'Todo',
			taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
		},
		'column-2': {
			id: 'column-2',
			title: 'Todo',
			taskIds: ['task-5', 'task-6', 'task-7', 'task-8', 'task-9'],
		},
	},
	// Facilitate reordering of the columns
	columnOrder: ['column-1', 'column-2'],
};

export default initialData;
