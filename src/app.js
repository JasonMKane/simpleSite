// import aurelia-router
import { home } from './pages/home/home';
import { products } from './pages/products/products';
import { Subproducts } from './pages/subproducts/subproducts';
import { Pwreset } from './pages/pwreset/pwreset';
import { Router, RouterConfiguration } from 'aurelia-router';
export class App {
  message = 'Hello World!';

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './pages/home/home' },
      { route: 'products', name: 'products', moduleId: './pages/products/products', nav: true, title: 'Product List' },
      { route: 'subproducts/:superproduct/:subproduct', name: 'Subproduct', moduleId: './pages/subproducts/subproducts' },
      { route: 'pwreset/:username', name: 'pwreset', moduleId: './pages/pwreset/pwreset' },
      // { route: 'files/*path',      name: 'files',      moduleId: 'files/index', nav: 0,    title: 'Files', href:'#files' }
    ]);
  }
}
