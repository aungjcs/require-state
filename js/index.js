require([
    'require',
    'jquery',
    'angular',
    './sub',
    'common',
    'angular-ui-router',
    'ui-router-extras-future',

    // './detail',

    // 'err.handler',
    // 'rpc',
    // 'rpc.debug'
], function( require ) {

    var angular, app, sub, m;
    var sub = require( 'sub' );

    angular = require( 'angular' );

    // var common = require( 'err.handler' );
    // m = require( 'rpc.debug' );

    app = angular.module( 'mainApp', [
        'ct.ui.router.extras.future'
    ]);

    app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$futureStateProvider', function( $httpProvider, $stateProvider, $urlRouterProvider, $futureStateProvider ) {

        var pluginsLib;
        var resolveCache = {};

        // For any unmatched url, redirect to /state1
        // $urlRouterProvider.otherwise( '/list' );

        // Now set up the states
        $stateProvider.state( 'root', {
                url: '',
                abstract: true,
                template: '<div ui-view></div>',
                resolve: {}
            })
            .state( 'list', {
                parent: 'root',
                url: '/list',
                templateUrl: 'partials/list.html',
                controller: 'ListCtrl',
                data: {
                    session: {}
                }
            })

        .state( 'detail', {
            parent: 'root',
            url: '/detail',
            templateUrl: 'partials/detail.html',
            controller: 'DetailCtrl'
        })

        // .state( 'requireDetail', {
        //     parent: 'root',
        //     url: '/requireDetail',
        //     templateUrl: 'partials/detail.html',
        //     controller: require( 'detail' )
        // });

        $futureStateProvider.stateFactory( 'requireCtrl', function( $q, futureState ) {

            var defer = $q.defer();

            console.log( 'requireCtrl parser', futureState );

            require(['detail'], function( detail ) {

                futureState.controller = detail;
                defer.resolve( futureState );
            });

            return defer.promise;
        });

        $futureStateProvider.futureState({
            name: 'requireDetail',
            controller: 'DetailCtrl',
            url: '/requireDetail',
            parent: 'root',
            templateUrl: 'partials/detail.html',
            type: 'requireCtrl'
        });

        // $futureStateProvider.addResolve(function( $q ) {

        //     var defer = $q.defer();

        //     setTimeout(function() {

        //         console.log( 'resolved' );

        //         $futureStateProvider.futureState({
        //             name: 'detail',
        //             controller: 'DetailCtrl',
        //             url: '/detail',
        //             parent: 'root',
        //             templateUrl: 'partials/detail.html',
        //             type: 'requireCtrl'
        //         });

        //         defer.resolve();
        //     }, 500 );

        //     defer.promise;
        // });
    }]);

    app.controller( 'HeadCtrl', ['$scope', '$injector', '$element', function( $scope, $injector, $element ) {

        $scope.main = ( new Date() ).getTime();
        $scope.init = function() {

            $element.find( 'body>div' ).removeClass( 'not-ready' );
        };
    }]);

    app.controller( 'ListCtrl', ['$scope', '$injector', '$element', function( $scope, $injector, $element ) {

        $scope.stateName = 'list';

    }]);

    app.controller( 'DetailCtrl', ['$scope', '$injector', '$element', function( $scope, $injector, $element ) {

        $scope.stateName = 'detail';

    }]);

    angular.element( document ).ready(function() {

        angular.bootstrap( document, ['mainApp']);
        main(); // Rock from main
    });

    return;

    function main() {

        console.log( 'main' );
    }
});

define( 'index', [], function() {

    return 'index define';
});
