import angular from 'angular';
import uiRouter from 'angular-ui-router';
import page3Component from './page3.component';

let page3Module = angular.module('page3', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider.state('page3', {
    url: '/page3',
    component: 'page3'
  })
})

.component('page3', page3Component)

.name;

export default page3Module;
