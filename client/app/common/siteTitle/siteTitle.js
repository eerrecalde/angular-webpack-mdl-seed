import angular from 'angular';
import uiRouter from 'angular-ui-router';
import siteTitleComponent from './siteTitle.component';

let siteTitleModule = angular.module('siteTitle', [
  uiRouter
])

.component('siteTitle', siteTitleComponent)

.name;

export default siteTitleModule;
