import { selectBenches } from '../util/bench_selector';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {
    this._benchesToAdd(benches).forEach((bench) => {
      this.createMarkerFromBench(bench);
    });
  }

  _benchesToAdd(benches) {
    return selectBenches(benches).filter((bench) => (!this.markers.includes(bench)));
  }

  createMarkerFromBench(bench) {
    new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng },
      map: this.map,
      title: bench.description
    });
    this.markers.push(bench);
  }
}

export default MarkerManager;
