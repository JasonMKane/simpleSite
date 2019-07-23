import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class SideNav {
  constructor(rter) {
    this.router = rter
  }
}
