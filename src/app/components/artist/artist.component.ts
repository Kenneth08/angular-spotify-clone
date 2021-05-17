import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
      this.getArtistTopTracks(params['id']);
    });
  }

  ngOnInit(): void {}

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.artist = data;
    });
  }
  getArtistTopTracks(id: string) {
    this.spotify.getArtistTopTracks(id).subscribe((data) => {
      this.topTracks = data;
      console.log(data);
    });
  }
}
