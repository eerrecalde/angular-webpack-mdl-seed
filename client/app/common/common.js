import angular from 'angular';
import Navbar from './navbar/navbar';
import SiteTitle from './siteTitle/siteTitle';
import SiteHeader from './siteHeader/siteHeader';

let commonModule = angular.module('app.common', [
  Navbar,
  SiteTitle,
  SiteHeader,
])

.name;

export default commonModule;
