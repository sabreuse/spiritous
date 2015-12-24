import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      players: this.store.findAll('player'),
      characters: this.store.findAll('character'),
      player: {},
      character: {}
    })
  },

  actions: {
    createPlayer(info) {
      let newPlayer = this.store.createRecord('player', {
        name: info.name,
        email: info.email
      });

      newPlayer.save();
    },

    createCharacter(info) {
      let newCharacter = this.store.createRecord('character', {
        name: info.name,
        nickname: info.nickname,
        description: info.description
      });

      newCharacter.save();
    }

  }
});
