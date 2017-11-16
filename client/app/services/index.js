// Import your dependencies here
import angular from 'angular';

// EXAMPLE
// import ExampleService from './example.service';
import BookService from './book.service';

// Add the services to the module
let servicesModule = angular.module('app.services', []);

// EXAMPLE
// servicesModule.service('Example', ExampleService);
servicesModule.service('BookService', BookService);

export default servicesModule;