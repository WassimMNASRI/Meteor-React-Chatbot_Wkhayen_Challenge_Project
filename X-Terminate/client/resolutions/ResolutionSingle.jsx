import React, {Component} from 'react';

export default class ResolutionSingle extends Component {
    
    toggleChecked(){
        console.log(this);
        //Meteor.call('toggleResolution',this.props.resolution._id, this.props.resolution.complete)
        Meteor.call('toggleResolution',this.props.resolution)
        
    }
    
    deleteResolution(){
        console.log(this);
        //Meteor.call('deleteResolution',this.props.resolution._id)
        Meteor.call('deleteResolution',this.props.resolution)
        Bert.alert( "A note has deleted with success! ","success", "growl-top-right" ); 

    }

    render () {
        const resolutionClass = this.props.resolution.complete ? "checked" : "" ;
        const status = this.props.resolution.complete ? <span className="completed">Done! ...</span> : "" ;
        return (
            <li className={resolutionClass}>
                <input 
                        type ="checkbox"
                        readOnly={true}
                        checked={this.props.resolution.complete}
                        onClick={this.toggleChecked.bind(this)}
                 />
                 <a className="lienh" href={"/resolutions/" + this.props.resolution._id}> {this.props.resolution.text}</a>
                {status}
                <button className="btn-cancel"
                    onClick={this.deleteResolution.bind(this)}>
                    &times;
                </button>
            </li>
        )
    }
}