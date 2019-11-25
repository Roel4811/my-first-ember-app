import { helper } from '@ember/component/helper';

export default helper(function userLocation(params) {
  if (params == 'sufficient') {
    return 'warning'
  } else if (params == 'developing') {
    return 'success'
  } else if (params == 'excellent') {
    return 'danger'
  } else {
    return 'default'
  }
});
