// Import your dependencies here
import angular from 'angular';

// EXAMPLES
import AppTabs from './tabs/tabs.component';
import AppDropdownButton from './drop-button/drop-button.component';
import AppRating from './rating/rating.component';
//import HomeCtrl from './home.controller';

// Add the components/directives to the module
let componentsModule = angular.module('app.components', []);

// EXAMPLES
componentsModule.component('tabs', AppTabs);
componentsModule.component('dropdownButton', AppDropdownButton);
componentsModule.component('rating', AppRating);

// componentsModule.directive('exampleDirective', ExampleDirective);

export default componentsModule;