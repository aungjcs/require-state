require([
    'require',
    'jquery',
    'angular',
    'rpc.debug'
], function( require ) {

    // var common = require( 'err.handler' );
    var m = require( 'rpc.debug' );

    m = require( 'index' );

    console.log( 'index2 => ', m );
});
