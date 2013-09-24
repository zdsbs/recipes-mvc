
window.Recipes = Ember.Application.create();

Recipes.ApplicationAdapter = DS.FixtureAdapter.extend();

Recipes.Recipe = DS.Model.extend({
  name: DS.attr('string'),
  steps: DS.hasMany('step',{ async: true })
});

Recipes.Step = DS.Model.extend({
  step: DS.attr('string'),
  recipe: DS.belongsTo('recipe')
});

Recipes.Recipe.FIXTURES = [
  {
    id:1,
    name:'r1',
    steps:[1,2]
  }
];

Recipes.Step.FIXTURES = [
  {
    id:1,
    step:'s1'
  },
  {
    id:2,
    step:'s2'
  }
];

Recipes.Router.map( function() {
   this.resource( 'index', { path: '/' } ); 
});

Recipes.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('recipe');
  }
});

