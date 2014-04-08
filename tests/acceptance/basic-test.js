import startApp from './../helpers/start-app';
var App;

module('Acceptance - Basic', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it should initialize', function() {
  expect(1);
  visit('/').then(function() {
    ok($(App.rootElement).hasClass('ember-application'), 'The application was not initialized');
  });
});

test('it should do something else', function() {
  expect(1);
  ok(true);
});