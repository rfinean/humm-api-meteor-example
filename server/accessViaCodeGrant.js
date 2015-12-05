Meteor.methods({

    /**
     * Get user using the code
     * @param code
     */
    getMe: function getMe(code){
        /**
         * this will allow the next available DDP message to process without waiting for the current method.
         */
        this.unblock();
        // init humm

        console.log('--------------------- users.me()----------');

        humm.init({
            client_id: '56630fadae8c5007388b456c', client_secret: 'c36d2a00efa76f881c6dbfb3caa66e9bfadc71214c83e3320ad6d66c5c7fde34'
        });

        //get access using code
        var res = humm.accessViaCodeGrant(code);
        console.log(res);
        if(!res.error && res.data){
            //set token before request
            humm.setAccessToken(res.data.access_token);
            //request logged in user
            return humm.users.me();
        }
    },

    /**
     * Get song by id
     *
     * @param songId
     */
    getSongById: function getSongById(songId) {

        humm.init({
            client_id: '56630fadae8c5007388b456c', client_secret: 'c36d2a00efa76f881c6dbfb3caa66e9bfadc71214c83e3320ad6d66c5c7fde34'
        });
        var authRes = humm.authViaClientCredentials();
        //credentials
        console.log(authRes);
        humm.setAccessToken(authRes.data.data_response.access_token);
        return humm.songs.get(songId);
    }
});