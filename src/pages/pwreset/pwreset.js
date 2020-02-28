import { inject } from 'aurelia-framework';
import { AuthService } from '../../services/auth-service';

@inject(AuthService)
export class Pwreset {
  constructor(authService) {
    this.authService = authService;
    this.pwstatemessage = '';
  }

  activate(params) {
    this.user = this.authService.getUser(params.username);
    this.pwstatemessage = '';
  }

  resetPassword(password, match) {
    let stateMessage = ''
    if (password && match && password === match && password.length > 0) {
      this.authService.resetPassword(this.user.username, password);
      stateMessage = 'Password Reset Complete!';
    }
    else {
      stateMessage = 'Passwords do no match';
    }
    this.pwstatemessage = stateMessage;
  }

}
