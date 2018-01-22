import React,{Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Cars from "./car/Cars";
import Home from "./Home";
import Car from "./car/Car";
import CarsAll from "./car/CarsAll";

class Main extends Component{
    render(){
        const apiUrl = "http://ih791894.vds.myihor.ru:5000";
        return(
            <div className='App-Main'>
                <main>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/cars' component={Cars} source = {apiUrl}/>
                        <Route path='/car/:number' component={Car}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main;