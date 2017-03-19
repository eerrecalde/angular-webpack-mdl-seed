import CourseApi from '../../api/mockCourseApi';
class Page1Service {
  constructor($http, $q) {
    'ngInject';

    this._$http = $http;
    this._$q = $q;
  }

  getAll() {
    CourseApi.getAllCourses().then((data) => {
      console.log('data', data);
    })
  }
}

export default Page1Service;
