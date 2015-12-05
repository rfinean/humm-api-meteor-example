Meteor.methods({

    'removeMessages': function (){
        Messages.remove({});
    },

    'authMe': function (code){

        this.unblock();
        humm.init({
            client_id: '56630fadae8c5007388b456c', client_secret: 'c36d2a00efa76f881c6dbfb3caa66e9bfadc71214c83e3320ad6d66c5c7fde34'
        });
        var res = humm.accessViaCodeGrant(code);
        console.log(res);
        return res.data.access_token;
    },

    'getMe': function (token){
        humm.setAccessToken(token);
        return humm.users.me();
    },

    'getSongById': function (songID){
        humm.init({
            client_id: '56630fadae8c5007388b456c', client_secret: 'c36d2a00efa76f881c6dbfb3caa66e9bfadc71214c83e3320ad6d66c5c7fde34'
        });
        var authRes = humm.authViaClientCredentials();
        //credentials
        console.log(authRes);
        return humm.songs.get(songId);
    }
});