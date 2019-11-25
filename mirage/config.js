export default function() {
  this.namespace = '/api';

  this.get('/users', (schema, request) => {
    return schema.users.all();
  });

  this.get('/users/:id', (schema, request) => {
    var id = request.params.id;

    return schema.users.find(id);
  });

  this.get('/assignments', (schema, request) => {
    return schema.assignments.all();
  });

  this.get('/assignments/:id', (schema, request) => {
    var id = request.params.id;

    return schema.assignments.find(id);
  });

}
