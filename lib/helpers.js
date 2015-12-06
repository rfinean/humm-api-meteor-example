UI.registerHelper('isLoggedIn', function() {
  return !!Meteor.user();
});

UI.registerHelper('isCurrentUser', function(item) {
  return (item.creatorID === Meteor.userId());
});