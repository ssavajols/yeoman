# generator-maz-brunch

A generator for [Yeoman](http://yeoman.io). Sample Content.

## Before start

Before start, we need to install ruby, sass and compass.

### Ruby installation 

First step, is to download and install ruby (Ruby must be added to PATH VARS ENVIRONNEMENT) : 

[Ruby installer windows](http://rubyinstaller.org/downloads/)

### Sass

To install sass, execute the following command line :

```
$ gem install sass
```
  
### Compass 

To install compass, execute the following command line :

```
$ gem install compass
```
  
### How to use brunch

```javascript
# Start watcher :
$ npm start
# or 
$ brunch w --server

# Start builder :
$ npm build
# or
$ brunch b
```  

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-maz-brunch from npm, run:

```
$ npm install -g generator-maz-brunch
```

Finally, initiate the generator:

```
$ yo maz-brunch
```

Sub-generators (scaffholding):

```
$ yo maz-brunch:view "view_name"
$ yo maz-brunch:model "model_name"
$ yo maz-brunch:router "router_name"
$ yo maz-brunch:controller "controller_name"
$ yo maz-brunch:scss-page "scss_name"
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
