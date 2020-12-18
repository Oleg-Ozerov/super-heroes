import {Component, Input, OnInit} from '@angular/core';
import {LocalStorageService} from '../shared/services/localStorage.service';
import {HeroAPIService} from '../shared/services/Hero-API.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() hero;
  @Input() isMain;
  isSelected = false;
  constructor(
    public heroService: HeroAPIService,
    private storageService: LocalStorageService,
  ) {
  }

  ngOnInit(): void {
  }


  selectHero() {
    this.isSelected = !this.isSelected;
    this.storageService.addToSelectedList(this.hero);
    this.pickHero();
  }

  pickHero() {
    this.storageService.selectedHeroesList.map(hero => hero.selected = false);
    this.hero.selected = true;
  }
}
