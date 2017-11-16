class AppRatingCtrl {

  constructor() {}

  $onInit() {
    console.log('rating!');
      this.stars = [1,2,3];
  }

  // rateFunction(rating) {
  //   console.log('Rating selected: ' + rating);
  // };

  // toogle(index){
  //   console.log(index);
  // }

  // injection here
  // static get $inject() {
  //   return [
  //     '$service1',
  //     '$service2'
  //   ];
  // }

}

let bindings = {
  ratingValue: '=ngModel',
  max: '=?', // optional (default is 5)
  onRatingSelect: '&?',
  readonly: '=?'
}

let AppRating = {
  controller: AppRatingCtrl,
  controllerAs: 'ctrl',
  templateUrl: 'components/rating/rating.component.html',
  //restrict: 'EA'  
};

export default AppRating;

// https://angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html