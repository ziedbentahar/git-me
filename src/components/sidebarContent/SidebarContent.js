import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './SidebarContent.css';
import logo from './logo.png';

export default class SidebarContent extends Component {
   
    render() {
        return (
            <div className="sidebarContent">
                <header>
                    <img className="logo" src={logo} alt="Logo"/>
                </header>
                <footer>
                    Made with <i className="fa fa-heart"></i> by InFlow-IT
                    <span className="blinking-cursor">|</span>
                </footer>
            </div>
        )
    }
}
