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
    this._markersToRemove(benches).forEach((marker) => {
      this._removeMarker(marker);
    });
  }

  _markersToRemove(benches) {
    let benchIds = selectBenches(benches).map((b) => b.id);
    // let benchIds = Object.keys(benches)
    return this.markers.filter((m) => (!benchIds.includes(m.benchId)));
  }

  _removeMarker(marker) {
    marker.setMap(null);
  }

  _benchesToAdd(benches) {
    let benchesInMap = this.markers.map((m) => (m.benchId));
    benches = selectBenches(benches);
    return benches.filter((b) => !benchesInMap.includes(b));
  }

  createMarkerFromBench(bench) {
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng },
      map: this.map,
      title: bench.description,
      benchId: bench.id
    });
    this.markers.push(marker);
  }
}

export default MarkerManager;
