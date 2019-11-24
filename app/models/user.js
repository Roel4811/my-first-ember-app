import Model, { attr } from '@ember-data/model';
import EmberObject, { computed } from '@ember/object';

export default Model.extend({
  id: attr('number')
  // firstName: attr('string'),
  // lastName: attr('string'),
  // position: attr('string'),
  // age: attr('string'),
  // nicknames: attr(),
  // city: attr('string'),
  // avatar: attr('string'),
  //
  // fullName: computed('firstName', 'lastName', function() {
  //   return `${this.firstName} ${this.lastName}`;
  // })
});
