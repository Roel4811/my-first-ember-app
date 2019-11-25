import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  createdTime() {
    return faker.date.past(1);
  },
  assignmentId() {
    return faker.random.arrayElement([1, 2, 3]);
  },
  status() {
    return faker.random.arrayElement(['developing', 'sufficient', 'excellent']);
  },
  studentName() {
    return faker.name.firstName();
  }
});
