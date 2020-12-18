import {Injectable} from '@angular/core';
import {Token, User} from '../interfaces';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  token: Token | null;

  constructor(
    private router: Router,
  ) {
  }

  isUserAlreadyInBase(user): boolean {
    const currentUserBase = JSON.parse(localStorage.getItem('userBase'));
    const userInBase = currentUserBase.find(regUser => {
      return regUser.email === user.email;
    });

    return !!userInBase;
  }

  isPasswordValid(user): boolean {
    const currentUserBase = JSON.parse(localStorage.getItem('userBase'));
    const userInBase = currentUserBase.find(regUser => {
      return regUser.password === user.password;
    });

    return !!userInBase;
  }

  createToken() {
    let token;
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const expire = (new Date(new Date().getTime() + 3600 * 1000)).toString();

    for (let i = 0; i < 30; i++){
      token += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.token = {token, expire};
    localStorage.setItem('token', JSON.stringify(this.token));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  isTokenStillValid(): boolean{
    const currentToken = this.getToken();
    const currentTime = new Date();

    if (currentTime >= new Date(currentToken.expire)) {
      this.token = null;
    } else {
      this.token = currentToken;
    }

    return !!this.token;
  }

  login(){
    this.createToken();
    this.router.navigate(['/hero-selection']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
