import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

import { News } from 'src/app/interfaces/news-portal.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news!: any
  firstRecentNews!: News
  secondRecentNews!: News
  thirdRecentNews!: News

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe(response => {
      this.news = response
      const recentNews = this.news.length
      this.firstRecentNews = this.news[recentNews-1]
      this.secondRecentNews = this.news[recentNews-2]
      this.thirdRecentNews = this.news[recentNews-3]
      this.news.pop()
      this.news.pop()
      this.news.pop()
    });
  }

}
