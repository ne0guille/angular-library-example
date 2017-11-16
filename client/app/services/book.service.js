export default class BookService {
  constructor($http, AppConstants) {
    'ngInject';
    this._$http = $http;
    this._AppConstants = AppConstants;
  }


  getLibrary(user = "eyherabideg", limit = 5, status = 'all') {
    let request = {
      url: `${this._AppConstants.library}/${user}/books?limit=${limit}&status=${status}`,
      method: 'GET',
      data: {
        id: user
      }
    };
    //todo refactor mongodse schema
    return this._$http(request).then((res) => {
      return res.data.books.map(book => Object.assign({}, book.book, { status: book.status, rating: book.rating }));
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

      return this._$http(request).then((res) => res.data.article);
    }


}