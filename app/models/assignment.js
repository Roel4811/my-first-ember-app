import Model, { attr } from '@ember-data/model';

export default Model.extend({
  id: attr('number'),
  name: attr('string'),
  createdTime: attr('date'),
  course: attr('string'),
  marker_id: attr('number'),
  status: attr('string'),
  feedback_id: attr('number')
});
