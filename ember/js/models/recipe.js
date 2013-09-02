Recipes.Recipe = DS.Model.extend({
  name: DS.attr('string'),
  steps: DS
  isCompleted: DS.attr('boolean')
});