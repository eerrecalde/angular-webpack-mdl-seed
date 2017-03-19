import SiteHeaderModule from './siteHeader'
import SiteHeaderController from './siteHeader.controller';
import SiteHeaderComponent from './siteHeader.component';
import SiteHeaderTemplate from './siteHeader.html';

describe('SiteHeader', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SiteHeaderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SiteHeaderController();
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
    //   expect(SiteHeaderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    // });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SiteHeaderComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SiteHeaderTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SiteHeaderController);
      });
  });
});
