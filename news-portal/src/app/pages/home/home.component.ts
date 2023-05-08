import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news!: any

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe(response => {
      this.news = response
    });
  }

}
