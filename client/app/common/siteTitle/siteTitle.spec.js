import SiteTitleModule from './siteTitle'
import SiteTitleController from './siteTitle.controller';
import SiteTitleComponent from './siteTitle.component';
import SiteTitleTemplate from './siteTitle.html';

describe('SiteTitle', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SiteTitleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SiteTitleController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    // it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
    //   let controller = makeController();
    //   expect(controller).to.have.property('name');
    // });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    // it('has name in template [REMOVE]', () => {
    //   expect(SiteTitleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SiteTitleComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SiteTitleTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SiteTitleController);
      });
  });
});
