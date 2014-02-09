exports.config =
  # See docs at http://brunch.readthedocs.org/en/latest/config.html.

  # Application build path.  Default is public/
  paths:
    public: '<%= public_path %>'
    compass: './config.rb'

  files:
    javascripts:
      joinTo:
        'scripts/app.js': /^app/
        'scripts/vendor.js': /^vendor/
    templates:
      joinTo: 'scripts/app.js'

  plugins:
    imageoptimizer:
      smushit: true # if false it use jpegtran and optipng, if set to true it will use smushit
      path: '<%= public_path %>/images' # your image path within your public folder
