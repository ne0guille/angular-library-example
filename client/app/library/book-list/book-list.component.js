class LibraryBookListCtrl {
    
     constructor() {          
     }
   }
   
   let LibraryBookList = {
     controller: LibraryBookListCtrl,
     controllerAs: 'ctrl',
     templateUrl: 'library/book-list/book-list.component.html',
     bindings: {
      books: '='   
     }
     //link: function(scope, elem, attr) {}
     //bindToController: true
   };
   
   export default LibraryBookList;