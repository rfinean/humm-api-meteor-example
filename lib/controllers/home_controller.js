HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  	this.subscribe('messages');
    this.subscribe('players');
  },
  home: function() {
	this.render('Home');
  },
  game: function() {
	this.render('Game');
  }
});