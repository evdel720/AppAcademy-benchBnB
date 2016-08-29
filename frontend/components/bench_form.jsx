import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      seats: "",
      lat: this.props.lat,
      lng: this.props.lng
    };
  }

  handleInput(e) {
    let updateState = {};
    updateState[e.target.name] = e.target.value;
    this.setState(updateState);
  }

  handleSubmit() {
    this.props.router.push("/");
    this.props.createBench(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
          value={this.state.description}
          name="description"
          placeholder="Description"
          onChange={this.handleInput.bind(this)}/>
        <input type="text"
          name="seats"
          value={this.state.seats}
          placeholder="Seats"
          onChange={this.handleInput.bind(this)}/>
        lat: <input type="text" value={this.state.lat} disabled/>
        lng: <input type="text" value={this.state.lng} disabled/>
        <button>Create New Bench</button>
      </form>
    );
  }
}

export default withRouter(BenchForm);
