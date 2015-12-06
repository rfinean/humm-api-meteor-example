Template.Home.onCreated(function() {
	Meteor.call('removeMessages');
	Meteor.call('removePlayers');
	Session.set('playerRegistered', false);
	Session.set('playerScore', 0);
	
});