import angular from 'angular';
import 'angular-ui-router';   
import 'angular-ui-bootstrap'; 
import ngInfiniteScroll from 'ng-infinite-scroll';

// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';

// Import our templates file (generated by Gulp)
import './config/app.templates';
import './components';
import './services';
import './layout';
import './home';
import './library';
import './core/core.constants';

const requires = [
  'ui.router',     
  'ui.bootstrap', 
  //'ngRateIt',
  ngInfiniteScroll,
  'templates',
  'app.components',  
  'app.library',  
  'app.services',
  'app.layout',
  'app.home',
  'app.constants'
];

angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250);

window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});