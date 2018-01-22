import  React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Link, Route} from 'react-router-dom'

class CarList extends React.Component{
    render(){

        const car = this.props.car;
        const source = this.props.source;

        return(
            <div>
                <Link to={`/car/${car.number}`} id={car._id}> {car.title} </Link>
            </div>
        );
    }

}

CarList.propTypes = {
    car: PropTypes.shape({
        title: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        //number: PropTypes.double.isRequired
    }).isRequired
};

export default CarList;