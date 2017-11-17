class LibraryBookListCtrl {
  constructor($scope) {
    'ngInject';
    this._$scope = $scope;
  }

  loadMore(){
    this._$scope.$emit('load-more-books');
  }
}

const LibraryBookList = {
  controller: LibraryBookListCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'library/book-list/book-list.component.html',
  bindings: {
    books: '<',
    total: '<'
  }
};

export default LibraryBookList;