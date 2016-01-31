require.config({
    waitSeconds: 100,
    paths: {
        'jquery': [
            '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min'
        ],
        'angular': '../lib/angular',
        'angular-ui-router': '../../lib/angular-ui-router',
        'ui-router-extras-core': '../../lib/ct-ui-router-extras.core',
        'ui-router-extras-future': '../../lib/ct-ui-router-extras.future',
        'common': '../lib/common',
        'rpc': '../lib/rpc'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-ui-router': ['angular'],
        'ui-router-extras-core': ['angular'],
        'ui-router-extras-future': ['angular', 'ui-router-extras-core'],
        'common': {
            deps: ['angular']
        },
        'index': ['angular', 'ui-router-extras-future'],

        // 'apps/index2': ['rpc']
    },

    // deps: ['index', 'apps/index2'],
    deps: ['index'],
    callback: function() {

        // console.log( 'callback', arguments );
    },
    // urlArgs: 'ts=' + ( new Date() ).getTime()
});

define( 'app', [
    'require',
    'angular'
], function( require ) {

    console.log( 'app' );

    return {
        version: {
            versionName: '1.0.0'
        },
        moduleName: 'app'
    };
});

define( 'err.handler', [
    'require',
    'angular',
    'app',
    'common'
], function( require ) {

    var ret;

    ret = {
        version: {
            versionName: '1.0.0'
        },
        moduleName: 'err.handler',
        modules: []
    };

    ret.modules.push( require( 'app' ) );
    ret.modules.push( require( 'jquery' ) );
    ret.modules.push( require( 'common' ) );

    console.log( 'err.handler' );

    return ret;
});

// console.log( 'main.js' );
