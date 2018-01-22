import React,{Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import CarsAll from "./CarsAll";
import Car from "./Car";


class Main extends Component{
    render(){
        return(
            <div className='Cars'>
                <main>
                    <Switch>
                        <Route exact path='/cars' component={CarsAll}/>
                        <Route path='/car/:number' component={Car}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Main;