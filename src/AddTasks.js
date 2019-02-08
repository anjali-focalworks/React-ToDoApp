import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TodoList from './Todolist'
import './App.css';
export default class AddTasks extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '', status: true };
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
                                <label>Add your task</label>
                                <input id='txt-task' className='form-control' value={this.state.text} type='text' onChange={this.handleChange}></input>
                                
                            </div>
                            <button type='submit'> Add Task </button>
                        </form>
                    </Col>
                    <Col>
                        <h3>To Do List</h3>
                        <TodoList items={this.state.items} changeTaskStatus={this.changeTaskStatus} Parent={this}/>
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
            id: Date.now(),
            status: false
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: '',
            status: true
        }));
    }
    changeTaskStatus(task,parentObj) {
        console.log(task)
        task.status=true;
        debugger;
        if(parentObj.state.items){
            console.log(parentObj.state.items);
        
            parentObj.state.items.filter(item => item.id === task.id).map((item,id) => item.status=task.status);
            
            console.log('After Updating: ',parentObj.state.items);
            console.log(parentObj);
            parentObj.setState({ text: '' });
            //this.setState({ text: '' });
        }
       
        // this.setState(state => ({
        // }));
    }
}

