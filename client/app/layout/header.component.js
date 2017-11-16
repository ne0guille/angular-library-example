class AppHeaderCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName; 
	this.isNavCollapsed = true; 
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;