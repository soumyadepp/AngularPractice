import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  gender = "";
  productForm !: FormGroup;
  constructor(private formBuilder:FormBuilder) {
  }
  ngOnInit() {
    this.productForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      gender: ['',Validators.required],
      email: ['',Validators.required,Validators.email]
    });
  }

  addProduct(){
    console.log(this.productForm.value);
  }

  designationList = [
    {
      title: 'SDE-1',
      value: 'SDE-1'
    },
    {
      title: 'SDE-2',
      value: 'SDE-2'
    },
    {
      title: 'SDE-3',
      value: 'SDE-3'
    },
    {
      title: 'Program Manager',
      value: 'Program Manager'
    },
    {
      title: 'Engineering Lead',
      value: 'Enginnering Lead'
    },
    {
      title: 'CEO',
      value: 'CEO'
    },
    {
      title: 'CTO',
      value: 'CTO'
    }
  ];
  genderList = [
    {
      title: 'Male',
      value: 'Male'
    },
    {
      title: 'Female',
      value: 'Female'
    }
  ];
}
