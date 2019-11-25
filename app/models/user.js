import Model, { attr, hasMany } from '@ember-data/model';
import EmberObject, { computed } from '@ember/object';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  position: attr('string'),
  age: attr('string'),
  nicknames: attr(),
  city: attr('string'),
  avatar: attr('string'),
  assignments: hasMany('assignment'),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
});

// import DS from 'ember-data';
// const { Model } = DS;
//
// export default Model.extend({
//   type: DS.attr('string'),
//   firstName: DS.attr('string'),
//   lastName: DS.attr('string'),
//   position: DS.attr('string'),
//   age: DS.attr('string'),
//   nicknames: DS.attr(),
//   city: DS.attr('string'),
//   assignmentIds: DS.attr(),
//   avatar: DS.attr('string')
// });
