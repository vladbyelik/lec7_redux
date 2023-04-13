import React from 'react';

export default class TodoList extends React.Component {

  handleDelete(id) {
    this.props.onDelete(id);    
  }

  render() {
    const styles = { 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    return (
      <ul>
        {this.props.list.map(item => {
          const { id, value } = item;
          return (
            <li key={id} style={styles}>
              <h4 style={{ marginRight: '15px' }} >{value}</h4>

              <button onClick={this.handleDelete.bind(this, id)}>
                X
              </button>
            </li>
            )
        })}
      </ul>
    )
  }
}