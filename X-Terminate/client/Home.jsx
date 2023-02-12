import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';


export default class Home extends Component {

    setVar(){
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }
    
    render () {
        
        return (
            <ReactCSSTransitionGroup
            component="div"
            transitionName="route"
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            transitionAppear={true}
            >
            
                <center className="home">
                    <button className="start" onClick={this.setVar}>Explore Your Course!</button>
                </center>
            </ReactCSSTransitionGroup>
        )
    }
}