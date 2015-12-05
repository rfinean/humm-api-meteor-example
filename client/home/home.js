
Template.home.onCreated(function () {
    this.loggedViaCode = new ReactiveVar(false);
    this.meViaCode = {};

    this.loggedViaImplicit = new ReactiveVar(false);
    this.meViaImplicit = {};

});




Template.home.helpers({
    loggedViaCode: function loggedViaCode(){
        return Template.instance().loggedViaCode.get();
    },

    meViaCode: function meViaCode() {
        return Template.instance().meViaCode;
    },

    loggedViaImplicit: function loggedViaImplicit(){
        return Template.instance().loggedViaImplicit.get();
    },

    meViaImplicit: function meViaImplicit() {
        return Template.instance().meViaImplicit;
    }
});

Template.home.events({
    'click #login-via-auth-code': function loginViaCode(event, template){
        console.log('------------------- Starting Auth via auth code follow ------------------- ');
        console.log(humm);

        // init humm  with client_id
        humm.init({ client_id: '56630fadae8c5007388b456c' });

        //show pop up to enable user to login to hum
        humm.authViaCodeGrant(function(error, response) {
            console.log('------------- authViaAuthorizationCode complete -------------');
            console.log(error);
            console.log(response);

            //once the user is logged in and we have a code we can call
            Meteor.call('authMe', response.code, function(err, res) {

                    console.log("res");
                    Router.go('/profile/'+ res);

/*                console.log(err);
                console.log(res);
                template.loggedViaCode.set(true);
                template.meViaCode = res.data.data_response;
*/
            })
        });
    },

    'click #login-via-client-cred': function authViaClientCredentials() {
        Meteor.call('getSongById', '557ecbf86a64fc1b8bed533f', function(err, res) {
            console.log(err);
            console.log(res);
        })

    }
});
