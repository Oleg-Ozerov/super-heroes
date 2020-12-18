import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EMAIL_VALIDATOR, PASSWORD_VALIDATOR} from '../shared/constants';
import {User} from '../shared/interfaces';
import {AuthService} from '../shared/services/auth.service';
import {CustomValidators} from '../Validators/custom-validators';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  form: FormGroup;
  duplicatedUser = false;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        CustomValidators.login,
        Validators.minLength(8),
        ]
      ),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_VALIDATOR)
      ]),
      password: new FormControl('', [
        Validators.required,
        // CustomValidators.password,
        Validators.minLength(5)
      ]),
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const user: User = {
      login: this.form.value.login,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    if (!this.auth.isUserAlreadyInBase(user)) {
      this.addUserToLocalStorage(user);
      this.form.reset();
      this.auth.login();
    } else {this.duplicatedUser = true; }
  }

  addUserToLocalStorage(user: User): void {
    let currentUserBase = JSON.parse(localStorage.getItem('userBase')) || [];

    currentUserBase = [...currentUserBase, user];
    localStorage.setItem('userBase', JSON.stringify(currentUserBase));
  }
}
