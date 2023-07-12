import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface UserModel {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  number: FormControl<string | null>;
  postalCode: FormControl<string | null>;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-tres';

  emailControl = new FormControl('',[Validators.email]);
  passwordControl = new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]);
  numberControl = new FormControl('',[Validators.pattern('^[0-9]*$')]);
  postalCodeControl = new FormControl('',[Validators.minLength(4),Validators.maxLength(4)]);

  userModel: FormGroup<UserModel> = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
    number: this.numberControl,
    postalCode: this.postalCodeControl,
  });

  constructor(private fb: FormBuilder) {
    
  }

}
