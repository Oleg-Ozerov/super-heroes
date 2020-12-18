import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../shared/interfaces';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  isDataWrong = false;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  submit(): void {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    if (this.auth.isUserAlreadyInBase(user) && this.auth.isPasswordValid(user)) {
      this.form.reset();
      this.auth.login();
    } else {
      this.isDataWrong = true;
    }
  }
}
