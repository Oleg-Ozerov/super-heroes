import {Component, Input, OnInit, Pipe} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroAPIService} from '../shared/services/Hero-API.service';


@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss']
})
export class HeroInfoComponent implements OnInit {
  hero;
  constructor(
    private router: Router,
    private heroApi: HeroAPIService
  ) { }

  ngOnInit(): void {
    this.heroApi.findById(this.heroApi.id).subscribe((response) => {
      this.hero = response;
    });
  }

}
