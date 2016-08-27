import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      seats: "",
      lat: "",
      lng: ""
    };
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.description} placeholder="Description"/>
        <input type="text" value={this.state.seats} placeholder="Seats"/>
        <input type="text" value={this.state.lat} placeholder="Latitude"/>
        <input type="text" value={this.state.lng} placeholder="Longitude"/>
        <button>Create New Bench</button>
      </form>
    );
  }
}

export default BenchForm;
