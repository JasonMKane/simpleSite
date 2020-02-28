export class AuthService {

  getUser(username) {
    //Dummy function to get a user's properties.
    return { username: username, status: 'Active' };
  }

  resetPassword(username, password) {
    // do what's needed with the API to reset a password.
    return true;
  }
}
