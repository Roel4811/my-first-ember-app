import Model, { attr, belongsTo } from '@ember-data/model';

export default Model.extend({
  createdTime: attr('date'),
  status: attr('string'),
  studentName: attr('string'),
  assignment: belongsTo('assignment')
});
