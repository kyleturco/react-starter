import React, {createClass} from 'react';
import {render} from 'react-dom';

const App = createClass({
  getInitialState() {
    return {
      list: [],
    };
  },
  handleDelete(index) {
    const newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.newItemForm[0].value) {
      const newList = this.refs.newItemForm[0].value;
      this.setState({
        list: [...this.state.list, newList],
      });
      this.refs.newItemForm[0].value = '';
    }
  },
  render() {
    const list = this.state.list.map((item, index) => {
      return (
        <li key={`${item}${index}`}>
          <i onClick={this.handleDelete.bind(null, index)} className='close icon' />
          {item}
        </li>
      );
    });
    return (
      <div className='ui compact segment'>
        <h1>
          Todo List
        </h1>
        <form ref='newItemForm' className='ui form' onSubmit={this.handleSubmit}>
          <input placeholder='New Item' />
          <button className='ui primary button'>Add Item</button>
        </form>
        <div className='ui divider' />
        <h3>Items</h3>
        <div className='ui list'>
          {list}
        </div>
      </div>
    );
  }
});

render(<App />, document.getElementById('root'));
