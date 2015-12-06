Meteor.publish('messages', function (/* args */) {
  return Messages.find();
});
Meteor.publish('players', function (/* args */) {
  return Players.find();
});