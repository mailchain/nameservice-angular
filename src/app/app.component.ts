import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NameserviceAngularService } from 'projects/nameservice-angular/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nameserviceForm;
  nameservice = {};

  constructor(
    private formBuilder: FormBuilder,
    private nameserviceService: NameserviceAngularService
  ) {
    this.nameserviceForm = this.formBuilder.group({
      name: 'mailchain.eth'
    });
  }

  onSubmit(formData) {
    const protocol = "ethereum"
    const network = "mainnet"
    const value = formData['name']
    // Process nameservice data here
    this.nameserviceService.resolveName(protocol, network, value).subscribe(res => {
      this.nameservice = res['body']
    },
      err => {
        this.nameservice = err['error']
      })

    this.nameserviceForm.reset();
  }
}
