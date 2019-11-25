export default function() {
  this.namespace = '/api';

  this.get('/users', (schema, request) => {
    return schema.users.all();
  });

  this.get('/assignments', (schema, request) => {
    let assignments = schema.assignments.all();

    if(request.queryParams.name !== undefined) {
      let filteredAssignments = assignments.filter(function(assignment) {
        return assignment.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return filteredAssignments;
    } else {
      return assignments;
    }
  });

  this.get('/assignments/:id', (schema, request) => {
    var id = request.params.id;

    return schema.assignments.find(id);
  });

}
