import { helper } from '@ember/component/helper';

export default helper(function userLocation(params/*, hash*/) {
  return !params.includes("Amsterdam") ? 'In the Country' : params
});
