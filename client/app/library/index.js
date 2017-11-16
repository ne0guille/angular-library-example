// Import your dependencies here
import angular from 'angular';

// EXAMPLES
import LibraryBookItem from './book-item/book-item.component';
import LibraryBookList from './book-list/book-list.component';
import LibraryBookListContainer from './book-list-container/book-list-container';

// Add the components/directives to the module
let bookModule = angular.module('app.library', []);

// EXAMPLES
bookModule.component('bookItem', LibraryBookItem);
bookModule.component('bookList', LibraryBookList);
bookModule.component('bookListContainer', LibraryBookListContainer);
// componentsModule.directive('exampleDirective', ExampleDirective);

export default bookModule;