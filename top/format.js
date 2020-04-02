const util = require('util');

/*
* @params %s - string
* @params %d - number
* @params @j - json
*/
const str = util.format('My %s %d %j', 'string', 123, {test:'obj'});
console.log(str);
console.log('My %s %d %j', 'string', 123, {test:'obj'});