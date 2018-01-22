import  React,{Component} from 'react';
import { connect } from 'react-redux';
import axios from "axios/index";
import CarStore from '../StoreData'

class Car extends Component{
    // componentWillMount(){
    //     this.setState({
    //         isLoading: true
    //     });
    //     const apiUrl = "http://ih791894.vds.myihor.ru:5000"
    //     //console.log(this.props.route.source + "/cars");
    //     axios.get(apiUrl + "/cars/" + this.props.params.match.number
    //     ).then(
    //         response => {
    //             console.log(response.data);
    //             this.setState({
    //                 car: response.data,
    //                 isLoading: false
    //             })
    //             console.log(this.state.car);
    //         },
    //         error => {
    //             this.setState({
    //                 isLoading: false
    //             })
    //         }
    //     ).catch((err)=> {})
    // }
    render(){
        return(
            <div>
                <ul>
                    {

                        this.props.car.title
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const number = parseInt(ownProps.match.params.number, 10);
    const car = state.carState.cars.filter(x => x.number === number)[0];
    return {
        car
    }
}

export default connect(mapStateToProps)(Car);