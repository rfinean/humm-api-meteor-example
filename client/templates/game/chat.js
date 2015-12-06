Template.messages.onCreated(function() {
	Meteor.call('removeMessages');

	var username = Meteor.user().emails[0].address;

	if(Session.get('playerRegistered') === false){
		Meteor.call('insertPlayerData', username, 0);
		Session.set('playerRegistered',true);
		console.log('test');
	}
});


Template.messages.helpers({
    messages: function() {
        return Messages.find({}, { sort: { time: -1}});
    }
})




Template.chat.events = {
	'keydown input#message' : function (event) {
	    if (event.which == 13) { // 13 is the enter key event
			var username = Meteor.user().emails[0].address;
			var userID = Meteor.userId();
			var message = document.getElementById('message');
			var answer = Session.get('popularSongArtist');
			console.log('answer', answer);
			
			if (message.value != '') {
				Messages.insert({
					name: username,
					message: message.value,
					time: Date.now(),
				});

				if (message.value.trim().toLowerCase().indexOf(answer.trim().toLowerCase()) != -1) {
					Session.set('playerScore',Session.get('playerScore')+1);
					Messages.insert({
						name: 'Judge Bot',
						message: 'Well done ' + username + ', you win!!',
						time: Date.now(),
					});
				}

				message.value = '';
			}
	    }
	}
}