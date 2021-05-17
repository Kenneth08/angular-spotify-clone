import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.loading = false;
        console.log(data);
      },
      (err) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = err.error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
