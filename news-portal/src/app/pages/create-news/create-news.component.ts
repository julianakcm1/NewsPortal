import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
  formGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createFormGroup()
  }

  private createFormGroup(){
    this.formGroup = this.formBuilder.group({
      title: new FormControl(null),
      image: new FormControl(null),
      post: new FormControl(null),
      author: new FormControl(null),
    })
  }

  public onSubmit() {
    const values = this.formGroup.value

    this.apiService.createNews(values).subscribe(res => {
      this.router.navigate(['/'])
    })
  }
}
