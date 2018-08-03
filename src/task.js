import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	background-color: white;
`;

export default class Task extends React.Component {
	render() {
		const { task, index } = this.props;
		return (
			<Draggable draggableId={task.id} index={index}>
				{provided => {
					return (
						<Container
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							innerRef={provided.innerRef}
						>
							{task.content}
						</Container>
					);
				}}
			</Draggable>
		);
	}
}
