AccountsTemplates.configureRoute('signIn', {
    layoutTemplate: 'MasterLayout'
});

Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'pageNotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'home',
  where: 'client'
});

Router.route('/game', {
  name: 'game',
  controller: 'HomeController',
  action: 'game',
  where: 'client'
});