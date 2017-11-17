export default class BookService {
  constructor($http, AppConstants) {
    'ngInject';
    this._$http = $http;
    this._AppConstants = AppConstants;
  }


  getLibrary(user, status = 'all', lastSeen = '', limit = 5) {
    let url = `${this._AppConstants.library}/${user}/books?status=${status}&limit=${limit}`;
    if(lastSeen.length) url += `&lastSeen=${lastSeen}`;

    let request = {
      url: url,
      method: 'GET',
      data: {
        id: user
      }
    };

    //todo refactor mongodse schema
    return this._$http(request).then((res) => {
      let library = {};

      if(res && res.data.length){
        library = res.data[0];
        library.books = library.books.map(book => Object.assign({}, book.book, { status: book.status, rating: book.rating }));        
      }

      return library;
    });
  }

  updateStatus(bookId, newStatus) {
    let request = {
      url: `${this._AppConstants.library}/books/${bookId}/status`,
      method: 'POST',
      data: {
        status: newStatus,
        user: 'eyherabideg'
      }
    };

    return this._$http(request).then((res) => res);
  }

    rate(bookId, rate) {
      let request = {
        url: `${this._AppConstants.library}/books/${bookId}/rate`,
        method: 'POST',
        data: {
          rate
        }
      };

      return this._$http(request).then((res) => res);
    }


}