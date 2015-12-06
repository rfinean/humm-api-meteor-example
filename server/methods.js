Meteor.methods({
    'removeMessages': function (){
        Messages.remove({});
    },
    'removePlayers': function (){
        Players.remove({});
    },
    'getPopularSong': function (){
        var popularSongs = JSON.parse(Assets.getText('response.json'));
        var randomSong = Math.floor((Math.random() * 19) + 1);
        var popularSong = popularSongs.data_response[randomSong];
        console.log('popularSong', popularSong);
        return popularSong;
    },
    insertPlayerData: function (playerNameVar, playerScoreVar) {
      var currentUserId = Meteor.userId();
      Players.insert({
        name: playerNameVar,
        score: playerScoreVar,
        createdBy: currentUserId
      });
    },
    removePlayerData: function (selectedPlayer) {
      Players.remove(selectedPlayer)
    },
    modifyPlayerScore: function (selectedPlayer, scoreValue) {
        console.log("modify called", Meteor.userId() , scoreValue);
        Players.update(Meteor.userId(), {$set: {score: 10}});
    }
});