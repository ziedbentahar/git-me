import React from 'react';
import {Route} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './SlideInRoute.css';

const SlideInRoute = ({ component: Component, 
    sidebarClickHandler, 
    ...rest }) => (
  <Route {...rest} render={props => (
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={300}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={200}
      transitionName="SlideIn">
        <Component {...props} sidebarClickHandler={sidebarClickHandler} />
    </ReactCSSTransitionGroup>
  )}/>
)


export default SlideInRoute;