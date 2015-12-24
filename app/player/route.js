import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      data: this.store.findAll('player'),
      player: {}
    }
  },

  actions: {
    // createPlayer(info) {
    //   let newPlayer = this.store.createRecord('player', {
    //     name: info.name,
    //     email: info.email
    //   });

    //   newPlayer.save();
    // }
  }
});
