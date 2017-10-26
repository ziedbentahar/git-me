import React, {Component} from 'react';
import './Notification.css';

export default class Notification extends Component {

    constructor() {
        super();
        this.state = {
            visibility: null,
            content: {
                title: null,
                text: null
            }
        };
    }
    
    componentWillMount = () => {
        this.props.notificationManager.addSubscriber(this.onNotification);
    }

    componentWillUnmount = () => {
        this.props.notificationManager.removeSubscriber(this.onNotification);
    }
    

    onNotification = ({text, title, duration, delayed}) => {
       this.setState({
           visibility: true,
           content: {
               title: title, 
               text: text
           }
       });

       setTimeout(() => {
           //this.setState({...this.state, visibility: false});
       }, duration);
    }

    render() {
        return (
            this.state.visibility && <div className="notification">
                {this.state.content.title && <h4>{this.state.content.title}</h4>}
                <p>{this.state.content.text}</p>
            </div>
        );
    }
}
