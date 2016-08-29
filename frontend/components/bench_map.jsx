import React from 'react';
import MarkerManager from '../util/marker_manager';
import { withRouter } from 'react-router';

class BenchMap extends React.Component {
  componentDidMount(){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('bounds_changed', () => {
      let mapObject = this.map.getBounds();
      let northEast = {
        lat: mapObject.getNorthEast().lat(),
        lng: mapObject.getNorthEast().lng()
      };
      let southWest = {
        lat: mapObject.getSouthWest().lat(),
        lng: mapObject.getSouthWest().lng()
      };

      this.props.updateBounds({
        northEast, southWest
      });
    });

    this.map.addListener('click', this._handleClick.bind(this));

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  _handleClick(e) {
    let coords = {lat: e.latLng.lat(), lng: e.latLng.lng()};
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

  render() {
    return (
      <div id='map-container' ref='map'>
        BenchMap!!
      </div>
    );
  }
}

export default withRouter(BenchMap);
