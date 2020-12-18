import {Component, Input, OnInit} from '@angular/core';
import {HeroAPIService} from '../shared/services/Hero-API.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  @Input() responseList: Array<{}>;
  constructor() { }

  ngOnInit(): void {
  }

}
