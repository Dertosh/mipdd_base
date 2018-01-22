import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.svg';

class Header extends Component {
    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/cars'>Cars</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;