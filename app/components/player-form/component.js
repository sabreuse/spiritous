import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPlayer(player) {
      this.sendAction('createPlayer', player);
      this.set('player', {});
    }
  }
});
