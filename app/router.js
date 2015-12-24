import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('player', {path: '/player/:name'});
  this.route('character', {path: '/character/:name'});
});

export default Router;
