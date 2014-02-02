var <%= _.slugfity(this.name) %> = Backbone.Router.extend({
  routes: {
    "*actions": "action"
  },
  action: function(){
    
  }
});

module.exports = <%= _.slugfity(this.name) %>;