import angular from 'angular';
import uiRouter from 'angular-ui-router';
import page1Component from './page1.component';
import Page1Service from './page1.service';

let page1Module = angular.module('page1', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider.state('page1', {
    url: '/',
    component: 'page1'
  })
})

.component('page1', page1Component)
.service('page1Serv', Page1Service)

.name;

export default page1Module;
