import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {
  userModel = {
    email: '',
    password: '',
    city: '',
    state: '',
    zip: '',
    addresses: [
      {
        address: ''
      },
    ]
  }

  onSubmit(): void {
    console.log(this.userModel);
  }

  addAddressControl(): void {
    this.userModel.addresses.push({ address: '' });
  }

  // model = {
  //   email: '',
  //   password: '',
  //   city: '',
  //   state: '',
  //   zip: '',
  //   addresses: [
  //     {
  //       address: ''
  //     },
  //   ]
  // }

  // addAddressControl(): void {
  //   this.model.addresses.push({ address: '' });
  // }
}
