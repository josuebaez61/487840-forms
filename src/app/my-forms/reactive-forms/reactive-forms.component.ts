import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface UserModel {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  city: FormControl<string | null>;
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  userModel: FormGroup<UserModel>;

  constructor(private fb: FormBuilder) {
    this.userModel = this.fb.group({
      email: [''],
      password: [''],
      city: [''],
    });
    console.log(this.userModel);
  }
}
