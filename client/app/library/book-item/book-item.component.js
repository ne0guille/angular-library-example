import {
  bookStatus
} from '../../core/core.constants';

class LibraryBookItemCtrl {

  constructor($scope,bookStatus) {
    'ngInject';
    this.$scope = $scope;
    this.bookDropdownOptions = Object.values(bookStatus);
  }


  updateStatus(status){
    const bookId = this.book._id;
    this.$scope.$emit('book-status-changed', { bookId, status });
  }

}

let LibraryBookItem = {
  controller: LibraryBookItemCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'library/book-item/book-item.component.html',
  bindings: {
    book: '=',   
   }
  //link: function(scope, elem, attr) {}
  //bindToController: true
};

export default LibraryBookItem;