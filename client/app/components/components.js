import angular from 'angular';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import Page3 from './page3/page3';

let componentModule = angular.module('app.components', [
  Page1,
  Page2,
  Page3,
])

.name;

export default componentModule;
