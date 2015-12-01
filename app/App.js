import React, {createClass} from 'react';
import {render} from 'react-dom';

const App = createClass({
  getInitialState() {
    return {
      list: [],
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.newItemForm[0].value);
    this.refs.newItemForm[0].value = '';
  },
  render() {
    return (
      <div className='ui compact segment'>
        <h1>
          Todo List
        </h1>
        <form ref='newItemForm' className='ui form' onSubmit={this.handleSubmit}>
          <input placeholder='New Item' />
          <button className='ui primary button'>Add Item</button>
        </form>
      </div>
    );
  }
});

render(<App />, document.getElementById('root'));
