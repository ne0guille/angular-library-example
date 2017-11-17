import angular from 'angular';

import AppTabs from './tabs/tabs.component';
import AppDropdownButton from './drop-button/drop-button.component';
import AppRating from './rating/rating.component';

let componentsModule = angular.module('app.components', []);

componentsModule.component('tabs', AppTabs);
componentsModule.component('dropdownButton', AppDropdownButton);
componentsModule.component('rating', AppRating);

export default componentsModule;