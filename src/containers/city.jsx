import React from 'react';
import { connect } from 'react-redux';

class City extends Component {
//  handleClick = () => {
  //  this.props.selectCity(this.props.index);
  //}


  render() {
    return (
      <div className="list-group-item">
        <h3>{this.props.city.name}</h3>
      </div>
      );
  };
}
export default City;
