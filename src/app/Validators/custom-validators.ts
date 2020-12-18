import {AbstractControl, FormControl} from '@angular/forms';
import {LOGIN_VALIDATOR, PASSWORD_VALIDATOR} from '../shared/constants';

export class CustomValidators {

  static password(control: FormControl): {[key: string]: boolean} {
    const controls = control.parent.controls;

    const isPasswordValid = !(isIncludesEmailParts() && isIncludesNameParts() && PASSWORD_VALIDATOR.test(control.value));

    if (isPasswordValid) {
      return {password: true};
    }
    return null;

    function isIncludesEmailParts(): boolean {
      return control.value.includes(controls['email'].value.split('@')[0]);
    }

    function isIncludesNameParts(): boolean {
      const splitSeparator = controls['name'].value.includes('-') ? '-' : ' ';
      const nameParts = controls[`name`].value.split(splitSeparator);

      return nameParts.every(part => {
        control.value.includes(part);
      });

    }
  }
  static login(control: FormControl): {[key: string]: boolean} {
    const isNameValid = control.value && RegExp(LOGIN_VALIDATOR).test(control.value);
    if (isNameValid) {
      return null;
    } else {
      return {login: true};
    }
  }
}
