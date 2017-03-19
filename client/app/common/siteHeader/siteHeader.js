import angular from 'angular';
import uiRouter from 'angular-ui-router';
import siteHeaderComponent from './siteHeader.component';

let siteHeaderModule = angular.module('siteHeader', [
  uiRouter
])

.component('siteHeader', siteHeaderComponent)

.name;

export default siteHeaderModule;
