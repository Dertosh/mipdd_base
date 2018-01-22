import  React,{Component} from 'react';
import axios from "axios/index";

class Car extends Component{
    componentWillMount(){
        this.setState({
            isLoading: true
        });
        const apiUrl = "http://ih791894.vds.myihor.ru:5000"
        //console.log(this.props.route.source + "/cars");
        axios.get(apiUrl + "/cars/" + this.props.id
        ).then(
            response => {
                console.log(response.data);
                this.setState({
                    car: response.data,
                    isLoading: false
                })
                console.log(this.state.car);
            },
            error => {
                this.setState({
                    isLoading: false
                })
            }
        ).catch((err)=> {})
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        !this.state.isLoading && Object.keys(this.state.car).forEach((value, index, array)=>(
                            <li>{value}</li>
                        ))

                    }
                </ul>
            </div>
        );
    }
}

export default Car;