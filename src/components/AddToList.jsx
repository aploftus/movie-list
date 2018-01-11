import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';

class AddToList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    console.log(event.target.id);
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.props.addMovieToList(e)} onChange={e => this.handleChange(e)}>
          <input 
            id="titleToAdd"
            type="text"
            placeholder="add movie title here..."
            value={this.props.titleToAdd}
            onChange={e => this.handleChange(e)}
          />
          <Datetime id="hereisID"  />
          <button id="add-button">Add!</button>
        </form>
      </div>
    );
  }
}

export default AddToList;