import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';


export default class About extends Component {

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
            
                <center className="aboutt">
                    <h1> About </h1>
                        <br/>
                            <p> 
                                <b><i>X-Terminate</i></b>, <br/>a team of students web developpers: <b>Wassim M'nasri</b> of <b>ISITCom</b>,  <b>Hela Sahloul</b> of <b>ISSATSo</b> and <b>Souheil Frigui</b> of <b>ESSTHS</b>
                            </p>
                         <br/>    
                            <p className="social-network social-circle">
                            <a href="https://www.facebook.com/" className="fa fa-facebook " target="_blank"></a>
                            <a href="https://twitter.com/" className="fa fa-twitter" target="_blank"></a>
                            <a href="https://plus.google.com/" className="fa fa-google" target="_blank"></a>
                            <a href="https://www.linkedin.com/" className="fa fa-linkedin" target="_blank"></a>
                            <a href="https://www.youtube.com/" className="fa fa-youtube" target="_blank"></a>
                            <a href="https://www.instagram.com/" className="fa fa-instagram"target="_blank"></a>
                            <a href="https://pinterest.com/" className="fa fa-pinterest"target="_blank"></a>
                            <a href="https://www.tumblr.com/" className="fa fa-tumblr"target="_blank"></a>
                            </p>
                        <br/><br/><br/>
                </center>
            </ReactCSSTransitionGroup>
        )
    }
}