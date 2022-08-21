import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Property } from '../../models/Property';
import { PropertiesService } from '../../services/properties.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

@ViewChild('staticTabs') staticTabs: TabsetComponent;

addPropertyForm: FormGroup;
nextClicked: boolean;
property = new Property();

propertyTypes: Array<string> = ['House', 'Apartment'];

  constructor(private fb: FormBuilder,
              private router: Router,
              private propService: PropertiesService) {}

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [null , Validators.required],
        PType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required]
    }),
    PriceInfo: this.fb.group({
      Price: [null, Validators.required],
      BuiltArea: [null, Validators.required],
      Security: [0],
  }),
  AddressInfo: this.fb.group({
    Address: [null, Validators.required],
    RTM: [null, Validators.required],
    AvailableFrom: [null, Validators.required],
    Description: [null]
 }),
});
  }

  onBack() {
  this.router.navigate(['/']);
  }

  onSubmit(Form: NgForm) {
    this.nextClicked = true;
    if (this.validateTabs()) {
    this.mapProperty();
    this.propService.addProperty(this.property);
    console.log('property added succesfully');
    console.log(this.addPropertyForm);

    if (this.SellRent.value === '2') {
      this.router.navigate(['/rent-property']);
    } else {
      this.router.navigate(['/']);
    }
    } else {
      alert('The property was not addedd. Please check the details you have provided');
      console.log('please add valid values before saving');
    }
  }

  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    console.log('here');
    if (IsCurrentTabValid) {
    this.staticTabs.tabs[tabId].active = true;
    this.nextClicked = false;
    }
  }

  mapProperty(): void {
    this.property.SellRent = +this.SellRent.value;
    this.property.Name = this.Name.value;
    this.property.Price = this.Price.value;
    this.property.PType = this.PType.value;
    this.property.Security = this.Security.value;
    this.property.BuiltArea = this.BuiltArea.value;
    this.property.Address = this.Address.value;
    this.property.RTM = this.RTM.value;
    this.property.AvailableFrom = this.AvailableFrom.value;
    this.property.Description = this.Description.value;
}

  validateTabs(): boolean {
    if (this.BasicInfo.invalid) {
        this.staticTabs.tabs[0].active = true;
        return false;
    }

    if (this.PriceInfo.invalid) {
        this.staticTabs.tabs[1].active = true;
        return false;
    }

    if (this.AddressInfo.invalid) {
        this.staticTabs.tabs[2].active = true;
        return false;
    }
    return true;
}

  get BasicInfo() {
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
}

get PriceInfo() {
  return this.addPropertyForm.controls.PriceInfo as FormGroup;
}

get AddressInfo() {
  return this.addPropertyForm.controls.AddressInfo as FormGroup;
}

  get SellRent() {
    return this.BasicInfo.controls.SellRent as FormControl;
}

get PType() {
  return this.BasicInfo.controls.PType as FormControl;
}

get Name() {
  return this.BasicInfo.controls.Name as FormControl;
}

get City() {
  return this.BasicInfo.controls.City as FormControl;
}

get Price() {
  return this.PriceInfo.controls.Price as FormControl;
}

get BuiltArea() {
  return this.PriceInfo.controls.BuiltArea as FormControl;
}

get Security() {
  return this.PriceInfo.controls.Security as FormControl;
}

get Address() {
  return this.AddressInfo.controls.Address as FormControl;
}

get RTM() {
  return this.AddressInfo.controls.RTM as FormControl;
}

get AvailableFrom() {
  return this.AddressInfo.controls.AvailableFrom as FormControl;
}

get Description() {
  return this.AddressInfo.controls.Description as FormControl;
}

onReset() {
  this.addPropertyForm.reset();
}

}
