import Page1Module from './page1'
import Page1Controller from './page1.controller';
import Page1Component from './page1.component';
import Page1Template from './page1.html';

describe('Page1', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Page1Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Page1Controller();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(Page1Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Page1Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Page1Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Page1Controller);
      });
  });
});
