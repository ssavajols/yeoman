var <%= _.slugfity(name) %> = Backbone.Router.extend({
  routes: {
    "*actions": "action"
  },
  action: function(){
    
  }
});

module.exports = <%= _.slugfity(name) %>;