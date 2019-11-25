import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        return this.store.query('assignment', { name: param }).then((results) => {
          return { query: param, results: results };
        });
      } else {
        return this.store.findAll('assignment').then((results) => {
            return { query: param, results: results };
        });
      }
    }
  }
});
