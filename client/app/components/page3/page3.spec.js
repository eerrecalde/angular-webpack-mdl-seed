import Page3Module from './page3'
import Page3Controller from './page3.controller';
import Page3Component from './page3.component';
import Page3Template from './page3.html';

describe('Page3', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Page3Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Page3Controller();
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
      expect(Page3Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Page3Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Page3Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Page3Controller);
      });
  });
});
