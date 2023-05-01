/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an indicator function to invoke for each collection element (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if not provided an indicator function to invoke for each collection element (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( {}, value );
		};
	}
});

tape( 'the function throws an error if provided an `options` argument which is not an object', function test( t ) {
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, 'beep' );
	}

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value, next );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, 'beep' );
	}

	values = [
		'5',
		-5,
		3.14,
		0,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'limit': value
			};
			factory( opts, next );
		};
	}
});

tape( 'the function returns a function (no options)', function test( t ) {
	function next( value, clbk ) {
		clbk( null, 'beep' );
	}
	t.strictEqual( typeof factory( next ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (options)', function test( t ) {
	function next( value, clbk ) {
		clbk( null, 'beep' );
	}
	t.strictEqual( typeof factory( {}, next ), 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function throws an error if not provided a collection (no options)', function test( t ) {
	var countByAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, 'beep' );
	}

	countByAsync = factory( next );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			countByAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if not provided a collection (options)', function test( t ) {
	var countByAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, 'beep' );
	}

	countByAsync = factory( {}, next );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			countByAsync( value, noop );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (no options)', function test( t ) {
	var countByAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, 'beep' );
	}

	countByAsync = factory( next );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			countByAsync( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the returned function throws an error if not provided a callback function (options)', function test( t ) {
	var countByAsync;
	var values;
	var i;

	function next( value, clbk ) {
		clbk( null, 'beep' );
	}

	countByAsync = factory( {}, next );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			countByAsync( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the returned function invokes an indicator function once for each element in a collection (value,next)', function test( t ) {
	var countByAsync;
	var expected;
	var results;
	var arr;
	var i;

	countByAsync = factory( indicator );

	arr = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	i = -1;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value, next ) {
		i += 1;
		t.strictEqual( value, expected[ i ], 'provides expected value' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, (value < 3) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'the returned function invokes an indicator function once for each element in a collection (value,index,next)', function test( t ) {
	var countByAsync;
	var expected;
	var results;
	var arr;
	var i;

	countByAsync = factory( indicator );

	arr = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	i = -1;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		i += 1;
		t.strictEqual( value, expected[ index ], 'provides expected value' );
		t.strictEqual( index, i, 'provides expected index' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, (value < 3) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'the returned function invokes an indicator function once for each element in a collection (value,index,collection,next)', function test( t ) {
	var countByAsync;
	var expected;
	var results;
	var arr;
	var i;

	countByAsync = factory( indicator );

	arr = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	i = -1;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value, index, collection, next ) {
		i += 1;
		t.strictEqual( value, expected[ index ], 'provides expected value' );
		t.strictEqual( index, i, 'provides expected index' );
		t.strictEqual( collection, arr, 'provides input collection' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, (value < 3) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'if an indicator function accepts fewer than 2 arguments, the function returns a function which invokes an indicator function with four arguments (1 argument)', function test( t ) {
	var countByAsync;
	var expected;
	var results;
	var arr;
	var i;

	countByAsync = factory( indicator );

	arr = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	i = -1;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value ) {
		var next = arguments[ 3 ];
		i += 1;

		t.strictEqual( value, expected[ i ], 'provides expected value' );
		t.strictEqual( arguments[ 1 ], i, 'provides expected index' );
		t.strictEqual( arguments[ 2 ], arr, 'provides input collection' );

		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, (value < 3) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'if an indicator function length is 0, the function returns a function which invokes an indicator function with four arguments', function test( t ) {
	var countByAsync;
	var expected;
	var results;
	var arr;
	var i;

	countByAsync = factory( indicator );

	arr = [ 1, 2, 3 ];
	expected = [ 1, 2, 3 ];
	i = -1;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator() {
		var next;
		var v;

		next = arguments[ 3 ];
		v = arguments[ 0 ];
		i += 1;

		t.strictEqual( v, expected[ i ], 'provides expected value' );
		t.strictEqual( arguments[ 1 ], i, 'provides expected index' );
		t.strictEqual( arguments[ 2 ], arr, 'provides input collection' );

		setTimeout( onTimeout, v );

		function onTimeout() {
			next( null, (v < 3) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'the returned function groups collection elements according to an indicator function and returns group counts', function test( t ) {
	var countByAsync;
	var results;
	var arr;

	countByAsync = factory( indicator );

	arr = [ 300, 250, 100 ];
	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, (value > 200) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'the returned function groups collection elements according to an indicator function and returns group counts (string serialization)', function test( t ) {
	var countByAsync;
	var results;
	var arr;

	countByAsync = factory( indicator );

	arr = [ 300, 250, 100 ];
	results = {
		'[object Object]': 3
	};

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, {} );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'the returned function groups collection elements according to an indicator function and returns group counts (string serialization)', function test( t ) {
	var countByAsync;
	var results;
	var arr;

	countByAsync = factory( indicator );

	arr = [ 300, 250, 100 ];
	results = {
		'undefined': 3
	};

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			next();
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'by default, the returned function processes collection elements concurrently', function test( t ) {
	var countByAsync;
	var expected;
	var results;
	var count;
	var arr;

	countByAsync = factory( indicator );

	arr = [ 300, 250, 100 ];
	expected = [ 100, 250, 300 ];
	count = -1;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, expected[ count ], 'provides expected value' );
			next( null, (value > 200) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'the function supports returning a function for processing collection elements sequentially (in series)', function test( t ) {
	var countByAsync;
	var expected;
	var results;
	var count;
	var opts;
	var arr;

	opts = {
		'series': true
	};
	countByAsync = factory( opts, indicator );

	arr = [ 300, 250, 100 ];
	expected = [ 300, 250, 100 ];
	count = -1;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, expected[ count ], 'provides expected value' );
			next( null, (value > 200) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'the function supports returning a function for processing collection elements sequentially (limit = 1)', function test( t ) {
	var countByAsync;
	var expected;
	var results;
	var count;
	var opts;
	var arr;

	opts = {
		'series': false,
		'limit': 1
	};
	countByAsync = factory( opts, indicator );

	arr = [ 300, 250, 100 ];
	expected = [ 300, 250, 100 ];
	count = -1;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, expected[ count ], 'provides expected value' );
			next( null, (value > 200) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'the function supports returning a function which limits the maximum number of collection elements which are processed at any one time', function test( t ) {
	var countByAsync;
	var expected;
	var results;
	var count;
	var opts;
	var arr;

	opts = {
		'series': false,
		'limit': 2
	};
	countByAsync = factory( opts, indicator );

	arr = [ 300, 250, 100 ];
	expected = [ 250, 300, 100 ];
	count = -1;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			t.strictEqual( value, expected[ count ], 'provides expected value' );
			next( null, (value > 200) );
		}
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'the function supports specifying an execution context for the indicator function', function test( t ) {
	var countByAsync;
	var results;
	var opts;
	var arr;
	var ctx;

	ctx = {
		'count': 0
	};
	opts = {
		'thisArg': ctx
	};
	countByAsync = factory( opts, indicator );

	arr = [ 1, 2, 3 ];
	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		/* eslint-disable no-invalid-this */
		this.count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			next( null, (value < 3) );
		}
	}

	function done( error, result ) {
		t.strictEqual( ctx.count, 3, 'updated provided context' );
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.end();
	}
});

tape( 'if an error is encountered while processing a collection element, the returned function suspends execution and immediately returns the error (series)', function test( t ) {
	var countByAsync;
	var count;
	var opts;
	var arr;

	opts = {
		'series': true
	};
	countByAsync = factory( opts, indicator );

	arr = [ 1, 2, 3 ];
	count = 0;

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		setTimeout( onTimeout, value );

		function onTimeout() {
			count += 1;
			next( new Error( 'beep' ) );
		}
	}

	function done( error ) {
		t.strictEqual( count, 1, 'suspends execution' );
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered while processing a collection element, the returned function suspends execution and immediately returns the error (concurrent; limit)', function test( t ) {
	var countByAsync;
	var count;
	var opts;
	var arr;

	opts = {
		'limit': 2
	};
	countByAsync = factory( opts, indicator );

	arr = [ 300, 100, 250 ];
	count = 0;

	countByAsync( arr, done );

	function indicator( value, index, next ) {
		count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			if ( index === 1 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, 'beep' );
		}
	}

	function done( error ) {
		t.strictEqual( count, 2, 'suspends execution' );
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered while processing a collection element, the returned function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var countByAsync;
	var count;
	var arr;

	countByAsync = factory( indicator );

	arr = [ 500, 500, 500 ];
	count = 0;
	countByAsync( arr, done );

	function indicator( value, index, next ) {
		count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			if ( index === 1 ) {
				return next( new Error( 'beep' ) );
			}
			next( null, 'beep' );
		}
	}

	function done( error ) {
		t.strictEqual( count, 3, 'suspends execution' );
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.end();
	}
});

tape( 'if an error is encountered while processing a collection element, the returned function suspends execution and immediately returns the error (concurrent)', function test( t ) {
	var countByAsync;
	var count;
	var arr;

	countByAsync = factory( indicator );

	arr = [ 500, 500, 500 ];
	count = 0;
	countByAsync( arr, done );

	function indicator( value, index, next ) {
		count += 1;
		setTimeout( onTimeout, value );

		function onTimeout() {
			return next( new Error( 'beep' ) );
		}
	}

	function done( error ) {
		t.strictEqual( count, 3, 'suspends execution' );
		if ( error ) {
			t.pass( error.message );
		} else {
			t.fail( 'did not return an error' );
		}
		t.end();
	}
});

tape( 'if provided an empty collection, the returned function never invokes an indicator function and returns an empty object', function test( t ) {
	var countByAsync;
	var arr;

	countByAsync = factory( indicator );
	arr = [];

	countByAsync( arr, done );

	function indicator() {
		t.fail( 'should never be called' );
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, {}, 'returns expected results' );
		t.end();
	}
});

tape( 'the returned function does not guarantee asynchronous execution', function test( t ) {
	var countByAsync;
	var results;
	var arr;
	var i;

	countByAsync = factory( indicator );

	arr = [ 1, 2, 3 ];
	i = 0;

	results = {
		'true': 2,
		'false': 1
	};

	countByAsync( arr, done );
	i = 1;

	function indicator( value, next ) {
		next( null, (value < 3) );
	}

	function done( error, result ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.pass( 'did not return an error' );
		}
		t.deepEqual( result, results, 'returns expected results' );
		t.strictEqual( i, 0, 'releases the zalgo' );
		t.end();
	}
});
