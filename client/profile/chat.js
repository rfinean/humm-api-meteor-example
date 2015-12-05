Template.messages.onCreated(function() {
	Meteor.call('removeMessages');
});


Template.messages.helpers({
    messages: function() {
        return Messages.find({}, { sort: { time: -1}});
    }
})

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var user = Session.get('currentUser');
      var username = user.account.uname;

      var message = document.getElementById('message');

	if (message.value != '') {
		Messages.insert({
			name: username,
			message: message.value,
			time: Date.now(),
	});

	document.getElementById('message').value = '';
	message.value = '';
	}
    }
  }
}