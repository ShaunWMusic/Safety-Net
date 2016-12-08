import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {

    toggleAndSave(pledge, property) {
      pledge.toggleProperty(property);
      pledge.save();
    },

    // deleteUser() {
    //   const no = this.model
    //   no.destroyRecord()
    //   this.transitionToRoute('admin.user');
    // }

  },
});
