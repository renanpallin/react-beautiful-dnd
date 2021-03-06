import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import '@atlaskit/css-reset';

import { DragDropContext } from 'react-beautiful-dnd';

import Column from './column';

export class App extends React.Component {
	state = initialData;

	onDragEnd = result => {
		console.log(result);

		const { destination, source, draggableId } = result;

		if (!destination) return;
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		const { columns } = this.state;
		const sourceColumn = columns[source.droppableId];
		const destinationColumn = columns[destination.droppableId];

		const sourceTasks = [...sourceColumn.taskIds];
		const destinationTasks =
			source.droppableId === destination.droppableId
				? sourceTasks
				: [...destinationColumn.taskIds];

		sourceTasks.splice(source.index, 1);
		destinationTasks.splice(destination.index, 0, draggableId);

		const newSourceColumn = {
			...sourceColumn,
			taskIds: sourceTasks,
		};

		const newDestinationColumn = {
			...destinationColumn,
			taskIds: destinationTasks,
		};

		this.setState({
			columns: {
				...columns,
				[newSourceColumn.id]: newSourceColumn,
				[newDestinationColumn.id]: newDestinationColumn,
			},
		});
	};

	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				{this.state.columnOrder.map(columnId => {
					const column = this.state.columns[columnId];
					const tasks = column.taskIds.map(
						taskId => this.state.tasks[taskId]
					);

					return (
						<Column key={column.id} column={column} tasks={tasks} />
					);
				})}
			</DragDropContext>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
