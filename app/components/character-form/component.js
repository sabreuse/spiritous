import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createCharacter(character) {
      this.sendAction('createCharacter', character);
      this.set('character=', {});
    }
  }
});
