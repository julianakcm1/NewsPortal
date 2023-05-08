import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { ApiService } from 'src/app/api.service';
import { Comment, News } from 'src/app/interfaces/news-portal.interface';
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news!: News
  comments: Comment[] = []
  idNews!: number
  formGroup!: FormGroup

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.idNews = this.route.snapshot.params['id']
    this.getNews()
    this.getComments()
    this.createFormGroup()
  }

  private getNews() {
    this.apiService.getNewsById(this.idNews).subscribe(response => {
      this.news = response
    });
  }

  private getComments() {
    this.apiService.getComments().subscribe(response => {
      this.comments = response.filter((comment: { newsId: any; }) => comment.newsId == this.idNews);
    })
  }

  private createFormGroup(){
    this.formGroup = this.formBuilder.group({
      name: new FormControl(null),
      comment: new FormControl(null),
    })
  }

  public onComment() {
    const values = this.formGroup.value
    const randomNumber = Math.floor(Math.random() * 100);

    const comment = {
      id: randomNumber,
      newsId: this.idNews,
      author: values.name,
      comment: values.comment
    }

    this.apiService.postComment(comment).subscribe(res => {
      this.getComments()
      this.formGroup.reset();
    })
  }
}
