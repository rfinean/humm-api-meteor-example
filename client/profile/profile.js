
Template.profile.onCreated(function () {
    this.userLoaded = new ReactiveVar(false);
    this.meViaCode = {};
    var that = this;

    console.log(this.data);
    Meteor.call('getMe', this.data, function(err, res){
            that.userLoaded.set(true);
            that.meViaCode = res.data.data_response;

            Session.set('currentUser', res.data.data_response);
            
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

Template.profile.events({

    'click #request-song': function requestSong() {

        $("#request-song").css('visibility', 'hidden');
        $("#player").css('visibility', 'hidden');

        /* 2. This code loads the IFrame Player API code asynchronously. */
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        /* 3. This function creates an <iframe> (and YouTube player) */
        /*    after the API code downloads. */
        var player;
        onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'dQw4w9WgXcQ',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        };

        /* 4. The API will call this function when the video player is ready. */
        onPlayerReady = function(event) {
        event.target.playVideo();
        };

        /* 5. The API calls this function when the player's state changes. */
        /*    The function indicates that when playing a video (state=1), */
        /*    the player should play for six seconds and then stop. */
        var done = false;
        onPlayerStateChange = function(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 10000);
          done = true;
        }
        };
        stopVideo = function() {
            player.stopVideo();
        };

        // Meteor.call('getSongById', '557ecbf86a64fc1b8bed533f', function(err, res) {
        //     console.log(res);
        // })
    }
});
