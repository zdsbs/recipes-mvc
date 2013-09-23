window.App = Ember.Application.create();

App.Router.map( function() {
   this.resource( 'index', { path: '/' } ); 
   this.resource( 'accounts'); 
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
	
var AccountObj = Ember.Object.extend({
	say: function(thing) {
    	alert(thing);
  	}
});

var account1 = AccountObj.create({
	foo:'zach',
	bar:'dan'
});

App.AccountsRoute = Ember.Route.extend({
  model: function() {
    return account1;
  }
});
