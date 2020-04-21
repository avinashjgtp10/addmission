import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  arr: FormArray
  formGroup: FormGroup
  submitted = false
  maxDate: Date;
  validation_messages = {
    'fathername': [
      { type: 'required', message: '*Father name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'mothername': [
      { type: 'required', message: '*Mother name is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'studentname': [
      { type: 'required', message: '*Student name is required' },
      { type: 'minlength', message: '*Student name must be 3 character' }
    ],
    'Gender': [
      { type: 'required', message: '*Please select purchase type' }
    ],
    'DateOfBirth': [
      {
        type: 'required', message: '*Please select  birth date'
      }
    ],
    'Address': [
      { type: 'required', message: '*Address is required' },
    ],
    'nationality': [
      { type: 'required', message: '*Select Nationality' }
    ],
    'Religion': [
      { type: 'required', message: '*Select Religion' }
    ],
    'caste': [
      { type: 'required', message: '*Caste is required' },
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'mothertoung': [
      { type: 'required', message: '*Select mothertoung language' }
      // { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'Adharno': [
      { type: 'required', message: '*Mobile Number is Required' },
      { type: 'maxlength', message: '*Mobile number maximum length should be only 10 number' },
      { type: 'pattern', message: '*Enter valid mobile number' },
      { type: 'minlength', message: '*Mobile number minumum lenght 10 number' }
    ],
    'Admissiontype': [
      { type: 'required', message: '*Please select admission type' },
    ],
    'UDISno': [
      { type: 'minlength', message: '*Name must be 3 character' }
    ],
    'standard': [
      { type: 'required', message: '*Please select standard type' },
    ],
    'trade': [
      { type: 'required', message: '*Please select trade' },
    ],
    'Mobilenumber': [
      { type: 'required', message: '*Mobile Number is Required' },
      { type: 'maxlength', message: '*Mobile number maximum length should be only 10 number' },
      { type: 'pattern', message: '*Enter valid mobile number' },
      { type: 'minlength', message: '*Mobile number minumum lenght 10 number' }
    ],
    'email': [
      { type: 'required', message: '*Email is required' },
      { type: 'pattern', message: '*Enter valid email' }
    ],
    'fatheroccupation': [
      { type: 'required', message: '*Father occupation is required' },
      { type: 'minlength', message: '*Father occupation must be 3 character' }
    ],
    'Anualincome': [
      { type: 'required', message: '*Father Anual income is required' }
    ]
  }
  classList: { name: string; }[];
  standardList: { name: string; }[];
  mothertounglanguage: { name: string; }[];
  nationality: { name: string; }[];
  trade: { name: string; }[];
  Religion: { name: string; }[];
  constructor(public fb: FormBuilder,
    public dpconfig: BsDatepickerConfig) {
    this.dpconfig.dateInputFormat = 'DD-MM-YYYY';
    this.dpconfig.isAnimated = true;
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
    this.classList = [
      { name: "नवीन प्रवेश" },
      { name: "दुसऱ्या शाळेतून या शाळेत प्रवेश" }
    ];
    this.standardList = [
      { name: "पहिली" },
      { name: "दुसरी" },
      { name: "तिसरी" },
      { name: "चौथी" },
      { name: "पाचवी" },
      { name: "सहावी" },
      { name: "सातवी" },
      { name: "इतर" }
    ];
    this.nationality = [
      { name: "भारतीय" },
      { name: "इतर" }
    ];
    this.mothertounglanguage = [
      { name: "मराठी" },
      { name: "कश्मीरी" },
      { name: "बंगाली" },
      { name: "हिंदी" },
      { name: "गुजराती" },
      { name: "तेलुगु" },
      { name: "कन्नड़" },
      { name: "तमिळ" },
      { name: "मल्याळम" },
      { name: "इतर" }
    ];
    this.trade = [
      { name: "Fitter" },
      { name: "Diesel Machanical" },
      { name: "Welder" },
      { name: "Electrician" },
      { name: "Other" }
    ];
    this.Religion = [
      { name: "HINDUISM " },
      { name: "ISLAM " },
      { name: "CHRISTIANITY" },
      { name: "SIKHISM" },
      { name: "BUDDHISM " },
      { name: "JAINISM " },
      { name: "JUDAISM" },
      { name: "SEBC" },
      { name: "ZOROASTRIANISM" },
      { name: "Other" }
    ];
  }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      fathername: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      mothername: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      studentname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      Gender: ['male', Validators.compose([
        Validators.required
      ])],
      DateOfBirth: ['', Validators.compose([
        Validators.required
      ])],
      Address: ['', Validators.compose([
        Validators.required
      ])],
      nationality: ['', Validators.compose([
        Validators.required
      ])],
      Religion: ['', Validators.compose([
        Validators.required
      ])],
      caste: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      mothertoung: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      Adharno: ['', Validators.compose([
        // Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]{10}$'),
        Validators.minLength(10)
      ])],
      Admissiontype: ['', Validators.compose([
        Validators.required
      ])],
      UDISno: ['', Validators.compose([
        Validators.minLength(3)
      ])],
      standard: ['', Validators.compose([
        Validators.required
      ])],
      trade: ['', Validators.compose([
        Validators.required
      ])],
      Mobilenumber: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]{10}$'),
        Validators.minLength(10)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ])],
      fatheroccupation: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      Anualincome: ['', Validators.compose([
        Validators.required
      ])],


    })
  }
  get f() {
    return this.formGroup.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
  }
}