/**
 * Module dependencies
 */

var util = require('util')
	, _ = require('lodash');

_.defaults = require('merge-defaults');


/**
 * This `after` function is run before generating targets
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */
module.exports = function(scope, cb) {

	//
	// Trigger callback with no error to proceed
	//

	cb();
};
