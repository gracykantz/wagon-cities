import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';
import React from 'react';
import City from './city';
import citiesReducer from '../reducers/cities_reducer';

const CityList = (props) => {
  const renderList = () => {
    <div className="cities"></div>
    return props.cities.map((city, index) => {

      return (
      <City
      city={city}
      key={city.address}
      index={index}
      />

      );
    });
  };


return (
  <div>
    {renderList()}
  </div>
  );

  componentWillMount = () => {
    this.props.setCities();
  };
};
function mapStateToProps(state)  {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
