import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minSeating: this.props.minSeating,
      maxSeating: this.props.maxSeating
    };
  }

  handleInput(e) {
    let updateState = {};
    updateState[e.target.name] = e.target.value;
    this.setState(updateState);
    this.props.updateFilter(e.target.name, e.target.value);
  }

  render() {
    return (
      <form>
        <input type="text" name="minSeating"
          onChange={this.handleInput.bind(this)}
          placeholder="minSeating"/>
        <input type="text" name="maxSeating"
          onChange={this.handleInput.bind(this)}
          placeholder="maxSeating"/>
      </form>
    );
  }
}

export default FilterForm;
