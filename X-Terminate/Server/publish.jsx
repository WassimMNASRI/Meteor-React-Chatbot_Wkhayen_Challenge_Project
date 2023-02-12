Resolutions = new Mongo.Collection("resolutions");



    if ( Meteor.isServer ) {
        console.log (Meteor.settings.private.ptest);
        
        Meteor.publish ("allResolutions", function () {
            return Resolutions.find({complete:false});
        });

        Meteor.publish ("userResolutions", function () {
            return Resolutions.find({user: this.userId});
        });

    }
