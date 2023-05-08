import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  formGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.createFormGroup()
  }

  private createFormGroup(){
    this.formGroup = this.formBuilder.group({
      name: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
    })
  }

  public onSubmit() {
    const values = this.formGroup.value
    this.apiService.creteUser(values).subscribe(response => {
      this.router.navigate(['/'])
    })
  }
}
