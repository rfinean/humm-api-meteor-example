Template.Game.onCreated(function() {

        var popularSong = Meteor.call('getPopularSong', function(err, data){
            if (err) {
                console.log(err);
            } else {
                Session.set('popularSong', data);
            }

        });

        // Meteor.call('getSongById', '557ecbf86a64fc1b8bed533f', function(err, res) {
        //     console.log(res);
        // })
});


Template.Game.helpers({
    popularSong: function() {
        console.log(Session.get('popularSong'));
        return Session.get('popularSong');
    }
})

Template.Game.events({

    'click #request-song': function requestSong() {

        Bert.alert({
          title: 'Song Now Playing!',
          type: 'info',
          style: 'growl-top-right',
          icon: 'fa-music'
        });

        var popularSong = Meteor.call('getPopularSong', function(err, data){
            if (err) {
                console.log(err);
            } else {
                Session.set('popularSong', data);
            }

        });

        var popularSong = Session.get('popularSong');

        var popularSongYouTube = popularSong.foreign_ids.youtube;
        Session.set('popularSongYouTube', popularSongYouTube);
        console.log("popularSongYouTube", popularSongYouTube);

        var popularSongArtist = popularSong.artists[0].name;
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
              videoId: popularSongYouTube,
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
              setTimeout(stopVideo, 40000);
              done = true;
            }
        };
        stopVideo = function() {
            player.stopVideo();
        };

    }
});
