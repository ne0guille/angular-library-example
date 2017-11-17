import angular from 'angular';

import BookService from './book.service';

let servicesModule = angular.module('app.services', []);

servicesModule.service('BookService', BookService);

export default servicesModule;