import lodash from 'lodash';

const arr=[1,1,1,2,2,3,4,4,4,5,1,2];
const uni = lodash.uniqBy(arr);

console.log(uni);