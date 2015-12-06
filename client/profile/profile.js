
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

        var popularSong = Meteor.call('getPopularSong');
        console.log('popularSong', popularSong);

        var popularSongYouTube = popularSong.url.youtube;
        Session.set('popularSongYouTube', popularSongYouTube);
        console.log("popularSongYouTube", popularSongYouTube);

        var popularSongArtist = popularSong.artists.name;
        Session.set('popularSongArtist', popularSongArtist);
        console.log("popularSongArtist", popularSongArtist);

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
              videoId: 'popularSongYouTube',
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
        /*    the player should play for five seconds and then stop. */
        var done = false;
        onPlayerStateChange = function(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
              setTimeout(stopVideo, 5000);
              done = true;
            }
        };
        stopVideo = function() {
            player.stopVideo();
        };

        // Meteor.call('getSongById', '557ecbf86a64fc1b8bed533f', function(err, res) {
        //     console.log(res);
        // })

        console.log('popularSong', popularSong);
    }
});
