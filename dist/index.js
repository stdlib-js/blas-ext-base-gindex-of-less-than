/** @license Apache-2.0 */

'use strict';

/**
* Return the first index of an element in a strided array which is less than a specified search element.
*
* @module @stdlib/blas-ext-base-gindex-of-less-than
*
* @example
* var gindexOfLessThan = require( '@stdlib/blas-ext-base-gindex-of-less-than' );
*
* var x = [ 1.0, 1.0, 0.0, 1.0 ];
*
* var idx = gindexOfLessThan( x.length, 1.0, x, 1 );
* // returns 2
*
* @example
* var gindexOfLessThan = require( '@stdlib/blas-ext-base-gindex-of-less-than' );
*
* var x = [ 1.0, 1.0, 0.0, 1.0 ];
*
* var idx = gindexOfLessThan.ndarray( x.length, 1.0, x, 1, 0 );
* // returns 2
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
