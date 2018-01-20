import  React from 'react';
import PropTypes from 'prop-types';

class CarList extends React.Component{
    componentWillMount(){
        this.setState({
            isLoading: false
        });
        axios.get("http://ih791894.vds.myihor.ru:5000/cars").then(
            response => {
                this.setState({
                    resp: response.data,
                    isLoading: false
                })
            }
        )
    }
    render(){

        const car = this.props.car

        return(
            <div>

            </div>
        )
    }

}

CarList.propTypes = {
    car: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
};