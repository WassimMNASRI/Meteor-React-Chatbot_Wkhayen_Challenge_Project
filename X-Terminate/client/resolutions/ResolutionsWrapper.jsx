import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

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
  
  resolutions () {
    return ( Resolutions.find().fetch());
  }

  render() {

    return (
      <ReactCSSTransitionGroup
            component="div"
            transitionName="route"
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            transitionAppear={true}
            id="global"
            >
          
                <div id="cadre1">
         <h1> My notes: {Session.get('test')} </h1>

         <ResolutionsForm />
        
          <ReactCSSTransitionGroup
              component="ul"
              className="resolutions"
              transitionName="resolutionLoad"
              transitionEnterTimeout={600}
              transitionLeaveTimeout={400}
          >

              {this.resolutions().map ((resolution)=> {

                 /* let res = this.resolutions();
                  console.log("this is the result :", res);

                  if (res.length < 1 )
                    {return 
                      ( <div>
                            <center>
                                  <h3> Loading ... </h3>
                            </center> 
                        </div>
                      )
                    }*/

              return <ResolutionSingle key={resolution._id} resolution={resolution}/>
             
              })} 
            
          </ReactCSSTransitionGroup>
        </div>
                <div id="cadre2">
                <iframe height="500" width="450" src="https://bot.dialogflow.com/ed5aea30-ede0-4f9f-8aa8-05141716bc75"></iframe>                </div>
      </ReactCSSTransitionGroup>
      
    )
  }
}