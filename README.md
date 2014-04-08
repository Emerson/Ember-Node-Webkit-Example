```

 _____          _                 _   _           _             _    _      _     _    _ _   
|  ___|        | |               | \ | |         | |           | |  | |    | |   | |  (_) |  
| |__ _ __ ___ | |__   ___ _ __  |  \| | ___   __| | ___ ______| |  | | ___| |__ | | ___| |_ 
|  __| '_ ` _ \| '_ \ / _ \ '__| | . ` |/ _ \ / _` |/ _ \______| |/\| |/ _ \ '_ \| |/ / | __|
| |__| | | | | | |_) |  __/ |    | |\  | (_) | (_| |  __/      \  /\  /  __/ |_) |   <| | |_ 
\____/_| |_| |_|_.__/ \___|_|    \_| \_/\___/ \__,_|\___|       \/  \/ \___|_.__/|_|\_\_|\__|
                                                                                             

```

### Setup

* Requirements: [Node](http://nodejs.org/), [Ember-CLI](https://github.com/stefanpenner/ember-cli) & [Gulp.js](http://gulpjs.com/) (`sudo npm install -g ember-cli gulp`)
* `git clone git@github.com:Emerson/Ember-Node-Webkit-Example.git`
* `cd Ember-Node-Webkit-Example && npm install && bower install`
* **Tab 1** - `gulp` - watches and triggers `ember build`
* **Tab 2** - `npm start` - starts the node-webkit app

### Tests

* You should be able to run your tests from within Node-Webkit by manually visiting `dist/tests/index.html`. Make sure the application viewport is large enough to actually see your tests _(the preview will hide them)_.
* It is also fully possible to run the tests outside of Node-Webkit by using the standard `ember server` and visiting `http://0.0.0.0:4200/tests`

![Up and Running](https://dl.dropboxusercontent.com/u/4502950/Github/updated-screenie.png)
