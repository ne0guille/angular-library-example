import { bookStatus } from '../../core/core.constants';

class LibraryBookListContainerCtrl {

  constructor($scope, bookStatus, BookService) {
    'ngInject';

    this._$scope = $scope;

    this.tabs = [{ title: 'Todos', value: 'all', isActive: false },
      { title: 'Leyendo', value: bookStatus.leyendo, isActive: false },
      { title: 'Quiero Leer', value: bookStatus.quieroLeer, isActive: false },
      { title: 'Leidos', value: bookStatus.leido, isActive: false },
      { title: 'Abandonados', value: bookStatus.abandonado, isActive: false }
    ];

    this.books = [];
    this.bookService = BookService;
    this.activeStatus = 'all';

    this._$scope.$on('book-status-changed', (event, data) => this.updateStatus(event, data));
    this._$scope.$on('load-more-books', (event, data) => this.loadMore());
  }

  $onInit() {
    this.getBooks();
  }

  updateStatus(event, data) {
    event.stopPropagation();

    this.bookService.updateStatus(data.bookId, data.status);
  }

  getBooks(status) {
    this.activeStatus = status;
    
    this.bookService.getLibrary("eyherabideg", status)
      .then(response => {
        this.books = response.books;
        this.totalLibrary = response.total;
      });
  }

  loadMore() {
    console.log('loadMore');
    
    const lastBookId = this.books.slice(-1)[0]._id;
    console.log(this.activeStatus);
    this.bookService.getLibrary("eyherabideg", this.activeStatus, lastBookId)
      .then(response => {
        this.books = this.books.concat(response.books);
        this.totalLibrary = response.total;
      });
  }
}

const LibraryBookListContainer = {
  controller: LibraryBookListContainerCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'library/book-list-container/book-list-container.html',
};

export default LibraryBookListContainer;