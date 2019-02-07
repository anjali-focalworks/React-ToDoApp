import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
//import ListGroupItem from 'react-bootstrap/ListGroupItem'
export default class TodoList extends React.Component {
    changeTaskStatus(item) {
        debugger
        item.status = false;
        debugger;
        this.text='Task Completed'
        this.props.changeTaskStatus(item, this.props.Parent);
        console.log('changeTaskStatus ', item);
    }
    render() {
        return (

            <ListGroup>
                {
                    this.props.items.map(item => (
                        <div className='row'>
                            <ListGroup.Item className='col-md-10' action variant='light' active={item.status} key={item.id}>
                                {item.text}
                            </ListGroup.Item>
                            <button className='btn btn-sm col-md-2' disabled={item.status} onClick={() => { this.changeTaskStatus(item) }} >Done</button>
                        </div>


                    ))}
            </ListGroup>

            // <ul>
            //   {this.props.items.map(item => (
            //     <li key={item.id}>{item.text}</li>
            //   ))}
            // </ul>
        );
    }
}
