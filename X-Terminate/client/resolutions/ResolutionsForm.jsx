import React, {Component} from 'react';

export default class ResolutionsForm extends Component {

    addResolution(event) {
        
        event.preventDefault();
        var text = this.refs.resolution.value.trim();
      
            if (text) {
                Meteor.call("addResolution", text, (error,data)=>{ //if you use function() you will get a beautiful error (error context)  

                    if (error) {
                        //  Bert.alert('Please login before submitting!', 'danger', 'fixed-top', 'fa-frown-0' );
                            Bert.alert( "Sign in first, Please !", "danger", "growl-top-left", "fa-bolt" );
                    } else {
                        Bert.alert( "Cool! A note has inserted with success ! ", "success", "growl-top-right" ); 
                        this.refs.resolution.value ="";
                    }

                });
            }

      }

    render () {
        return (
            <div>
                <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                    <input
                        type="text"
                        ref="resolution"
                        placeholder="New note"
                    />
                </form>
                
        </div>
        )
    }
}