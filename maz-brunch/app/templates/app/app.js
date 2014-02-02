var app = function() {

  // PRIVATE
  var userdata = {};
  var config = {
    debug: false,
    paths: {
      controller: "controller/"
    }
  };

  // PUBLIC
  return {
    initialized: false,
    launch: function() {
      this.initialize();
      this.getDataController();
    },
    initialize: function() {
      this.initialized = true;
    },
    get_config: function(index) {
      return config[index];
    },
    get_path: function(path) {
      if (!config.paths) {
        return null;
      }
      return config.paths[path];
    },
    get_userdata: function(index) {
      index = index.toString();
      return userdata[index] ? userdata[index] : null;
    },
    set_userdata: function(index, value) {
      index = index.toString();
      userdata[index] = value;
      return userdata[index];
    },
    unset_userdata: function(index) {
      index = index.toString();
      if (userdata[index])
        delete userdata[index];
    },
    getDataController: function() {

      var _this = this;
      var path = _this.get_path('controller');
      var debug = _this.get_config('debug');

      $('[data-controller]').each(function(i) {
        var controller_content = $(this).data('controller');
        var modules = controller_content.split(" ");

        $(modules).each(function(i, module_name) {
          if (module_name !== '') {
            var module = require(path + module_name);
            if (debug) {
              console.log('load controller :: ' + path + module_name);
            }
            if (!module.initialize && debug) {
              throw(path + module_name + " has no method initialize !");
            } else if (module.initialize) {
              module.initialize();
            }
          }
        });

        $(this).removeAttr('data-controller');

      });

    }
  };
};

module.exports = new app();