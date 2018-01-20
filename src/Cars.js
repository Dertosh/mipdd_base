import React, {Component} from 'react'

class Cars extends Component {
    render() {
        return(
            <div className="Cars">
                Привет из CAR {this.props.source}
            </div>
        );
    }
}

export default Cars;