Router.route('/', {
    action: function () {
        this.render('home');
    },
    name: 'home'
});

Router.route('/complete-auth', {
    action: function () {
        humm.completeAuthorization(window.location);
    }
});

Router.route('/profile/:_id', {
    action: function () { this.render('profile'); },
    onBeforeAction: function () { if (this.params._id) this.next(); },
    data: function(){ var userID = this.params._id; return userID; },
    name: 'profile'
});


/**

 App name: Meteor example

 Client ID: 56570bacae8c5087411778a3

 Client Secret: CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA=

 Redirect URI: https://developer.spotify.com

 */