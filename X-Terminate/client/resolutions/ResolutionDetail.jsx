import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class ResolutionDetail extends TrackerReact(Component) {

  constructor(){
    super();
      this.state = {
          subscraption: {
              resolutions: Meteor.subscribe("userResolutions")
              
          }
      }
  }

  componentWillUnmount(){
      this.state.subscraption.resolutions.stop();
  }
  
  resolution () {
    return ( Resolutions.findOne(this.props.id));
    
  }


    render () {
        let res= this.resolution();
        if (!res) {
            return (
                <div>
                    Loading ...
                 </div>
                 );
        }
        return (
            <ReactCSSTransitionGroup
            component="div"
            transitionName="route"
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            transitionAppear={true}
            >
                <h1> A note détails: </h1>
                <center> 
                    <h3>
                    &#164; {res.text} &#164;
                    </h3> 
                </center>
            </ReactCSSTransitionGroup>
        )
    }
}