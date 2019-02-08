import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
//import ListGroupItem from 'react-bootstrap/ListGroupItem'
export default class TodoList extends React.Component {
    changeTaskStatus(item) {
        item.status = false;
        this.text = 'Task Completed'
        this.props.changeTaskStatus(item, this.props.Parent);
        console.log('changeTaskStatus ', item);
    }
    render() {
        return (

            <ListGroup>
                {
                    this.props.items.map(item => (
                        <div className='row'>
                            {/* <button className='btn btn-sm col-md-2' disabled={item.status} onClick={() => { this.changeTaskStatus(item) }} >Done</button> */}
                            {/* <div className='col-md-2'>
                                <input type='checkbox' className='form-control' disabled={item.status} onClick={() => { this.changeTaskStatus(item) }} />
                            </div> */}
                            <ListGroup.Item action variant='light' className={item.status === true ? 'completed col-md-10' : 'Active col-md-10'} active={item.status} key={item.id}>
                             <span><input type='checkbox' className='' disabled={item.status} onClick={() => { this.changeTaskStatus(item) }} /> {item.text}</span>
                            </ListGroup.Item>
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
