define(['require', 'angular'], function( require ) {

    console.log( 'rpc' );

    return {
        rpc: function() {

            return 'rpc';
        }
    };
});

define( 'rpc.debug', ['require', 'angular'], function( require ) {

    console.log( 'rpc.debug' );

    return 'app.debug';
});

define( 'rpc.err', ['require', 'angular'], function( require ) {

    console.log( 'rpc.err' );

    return 'rpc.err';
});

console.log( 'rpc.js' );
