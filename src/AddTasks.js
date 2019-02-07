import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TodoList from './Todolist'

export default class AddTasks extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h3>Add Tasks</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label for='txt-task'>Add your task</label>
                                <input id='txt-task' className='form-control' value={this.state.text} type='text' onChange={this.handleChange}></input>
                            </div>
                            <button type='submit'> Add Task </button>
                        </form>
                    </Col>
                    <Col>
                        <h3>To Do List</h3>
                        <TodoList items={this.state.items} />
                    </Col>
                </Row>
            </Container>
        );

    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

