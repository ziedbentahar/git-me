import React, {Component} from 'react'
import './SidebarContent.css';
import logo from './logo.png';

export default class SidebarContent extends Component {
   
    render() {
        return (
            <div className="sidebarContent">
                <header>
                    <img className="logo" src={logo} alt="Logo"/>
                    <p>Git cheat sheet</p>
                </header>
                <article>
                    Whether you are new to git or just needing a referesher,
                    this cheat sheet will help you discover or remember useful git commands.
                    
                </article>
                <footer>
                    Crafted with <i className="fa fa-heart"></i> by InFlow-IT
                    <span className="blinking-cursor">|</span>
                </footer>
            </div>
        )
    }
}
