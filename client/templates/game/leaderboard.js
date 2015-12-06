Template.leaderboard.helpers({
  player: function () {
  	var currentUserId = Meteor.userId();
    return Players.find({}, {sort: {score: -1, name: 1}});
  },
  playerScore: function () {
  	return Session.get('playerScore');
  },
  playersCount: function () {
    return Players.find({}).count();
  }
});