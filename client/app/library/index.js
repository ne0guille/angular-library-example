import angular from 'angular';

import LibraryBookItem from './book-item/book-item.component';
import LibraryBookList from './book-list/book-list.component';
import LibraryBookListContainer from './book-list-container/book-list-container';

let bookModule = angular.module('app.library', []);

bookModule.component('bookItem', LibraryBookItem);
bookModule.component('bookList', LibraryBookList);
bookModule.component('bookListContainer', LibraryBookListContainer);

export default bookModule;