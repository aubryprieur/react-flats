import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

  };

  static defaultProps = {
    center: {lat: 50.633333, lng: 3.066667},
    zoom: 11
  };

  render() {
    return (
      <div>
        <div className="flat-list">

        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom} >
          <Marker lat={50.633333} lng={3.066667} text="My Marker" />
        </GoogleMapReact>
        </div>
      </div>
      );
  }
}

export default App;
