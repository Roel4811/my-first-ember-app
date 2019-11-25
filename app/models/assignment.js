import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import EmberObject, { computed } from '@ember/object';

export default Model.extend({
  name: attr('string'),
  createdTime: attr('date'),
  course: attr('string'),
  status: attr('string'),
  user: belongsTo('user'),
  feedbacks: hasMany('feedback'),

  finished: computed('status', function() {
    return this.status === 'finished'
  })
});
