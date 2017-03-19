class NavbarController {
  constructor() {
    this.name = 'navbar';

    setTimeout(function(){
      console.log('component handler reloaded')
      componentHandler.upgradeAllRegistered();
    }, 5000)
  }
}

export default NavbarController;
