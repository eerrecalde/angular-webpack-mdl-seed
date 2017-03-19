import angular from 'angular';
import uiRouter from 'angular-ui-router';
import page2Component from './page2.component';

let page2Module = angular.module('page2', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider.state('page2', {
    url: '/page2',
    component: 'page2'
  })
})

.component('page2', page2Component)

.name;

export default page2Module;
