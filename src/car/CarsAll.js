import React, {Component} from 'react'
import CarList from './CarList'
import axios from 'axios'
import store from '../StoreData'
import {BrowserRouter, Route} from 'react-router-dom'
import Car from "./Car";
import {connect} from "react-redux";


class CarsAll extends Component {
    componentWillMount(){
        this.setState({
            isLoading: true
        });
        const apiUrl = "http://ih791894.vds.myihor.ru:5000"
        //console.log(this.props.route.source + "/cars");
        axios.get(apiUrl + "/cars"
        ).then(
            response => {
                this.props.dispatch({
                    type: 'CAR_LIST_SUCCESS',
                    cars: response.data
                });
                console.log("CarsAll" + response.data);
                this.setState({
                    carsItems: response.data._items,
                    isLoading: false
                })
                //console.log(this.state.carsItems._items);
            },
            error => {
                this.setState({
                    isLoading: false
                })
            }
        ).catch((err)=> {})
    }
    render() {
        return(
            <div className="CarsAll">
                {this.state.isLoading && <div>Загрузка...</div>}
                {
                    !this.state.isLoading && this.props.cars.map((car,i)=>(<CarList key={i} car={car}/>))
                }
            </div>
        );
    }
}

const mapStateToProps = store => {
    return{
        cars: store.carState.cars
    }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(CarsAll);