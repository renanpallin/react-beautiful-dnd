import React from 'react';
import styled from 'styled-components';
import Task from './task';

const Container = styled.div`
	margin: 8px;
	border: 1px solid lightgrey;
	border-radius: 2px;
`;

const Title = styled.h3`
	padding: 8px;
`;

const TaskList = styled.div`
	padding: 8px;
`;

export default class Column extends React.Component {
	render() {
		const { column, tasks } = this.props;
		return (
			<Container>
				<Title>{column.title}</Title>
				<TaskList>
					{tasks.map(t => <Task key={t.id} task={t} />)}
				</TaskList>
			</Container>
		);
	}
}
