import { bookStatus } from '../../core/core.constants';

class LibraryBookListContainerCtrl {

  constructor($scope, bookStatus, BookService) {
    'ngInject';   

    this._$scope = $scope;
    
    this.tabs = [{
        title: 'Todos',
        route: 'all',
        isActive: false
      },
      {
        title: 'Leyendo',
        route: 'main',
        isActive: false
      },
      {
        title: 'Quiero Leer',
        route: 'main',
        isActive: false
      },
      {
        title: 'Leidos',
        route: 'main',
        isActive: false
      },
      {
        title: 'Abandonados',
        route: 'main',
        isActive: false
      }
    ]; 
    this.books = [];
    this.bookService = BookService;

    this._$scope.$on('book-status-changed', (event, data) => this.updateStatus(event, data)); 
  }

  $onInit(){    
    this.bookService.getLibrary().then(response => this.books = response);
  }

  select(tab) {
    this.activeTab = tab;
  }

  updateStatus(event, data){
    event.stopPropagation();    
    this.bookService.updateStatus(data.bookId, data.status);
  }
}

let LibraryBookListContainer = {
  controller: LibraryBookListContainerCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'library/book-list-container/book-list-container.html',
  //link: function(scope, elem, attr) {}
  //bindToController: true
};

export default LibraryBookListContainer;