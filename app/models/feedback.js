import Model, { attr } from '@ember-data/model';

export default Model.extend({
  id: attr('number'),
  createdTime: attr('date'),
  status: attr('string'),
  studentName: attr('string')
});
