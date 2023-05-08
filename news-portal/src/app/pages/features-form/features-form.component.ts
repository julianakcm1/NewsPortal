import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-features-form',
  templateUrl: './features-form.component.html',
  styleUrls: ['./features-form.component.scss']
})
export class FeaturesFormComponent implements OnInit {
  formGroup!: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.createFormGroup()
  }

  private createFormGroup(){
    this.formGroup = this.formBuilder.group({
      search: new FormControl(null),
      search_text: new FormControl({value: null, disabled: true}),
      search_filter: new FormControl({value: null, disabled: true}),
    })
  }

  public checkComments(event: any) {
    const isChecked = this.formGroup.get('search')?.value;

    if(!isChecked) {
      this.formGroup.get('search_filter')?.reset();
      this.formGroup.get('search_filter')?.disable();
      this.formGroup.get('search_text')?.reset();
      this.formGroup.get('search_text')?.disable();
    }
    else{
      this.formGroup.get('search_filter')?.enable();
      this.formGroup.get('search_text')?.enable();
    }
  }

  public onSearchTextSelect() {
    this.formGroup.get('search_filter')?.reset();
  }

  public onSearchFilterSelect() {
    this.formGroup.get('search_text')?.reset();
  }

  onSubmit() {
    const data = this.formGroup.value
    this.apiService.postVariabilities(data).subscribe(res => {
      this.router.navigate(['/register'])
    })
  }
}
