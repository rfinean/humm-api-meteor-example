
Template.profile.onCreated(function () {
    this.userLoaded = new ReactiveVar(false);
    this.meViaCode = {};
    var that = this;
    
    console.log(this.data);
    Meteor.call('getMe', this.data, function(err, res){
            that.userLoaded.set(true);
            that.meViaCode = res.data.data_response;       
    });
});

Template.profile.helpers({
    userLoaded: function loggedViaCode(){
        return Template.instance().userLoaded.get();
    },

    meViaCode: function meViaCode() {
        return Template.instance().meViaCode;
    }
});