import Page2Module from './page2'
import Page2Controller from './page2.controller';
import Page2Component from './page2.component';
import Page2Template from './page2.html';

describe('Page2', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Page2Module));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Page2Controller();
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
      expect(Page2Template).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Page2Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Page2Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Page2Controller);
      });
  });
});
