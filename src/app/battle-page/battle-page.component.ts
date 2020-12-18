import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../shared/services/localStorage.service';
import {Pipe} from '@angular/core';
import {HeroAPIService} from '../shared/services/Hero-API.service';
import {PowerupsService} from '../shared/services/powerups.service';
import {HistoryService} from '../shared/services/history.service';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.scss']
})
export class BattlePageComponent implements OnInit {
  selectedHero;
  enemyHero;
  myHeroPowerstats = 0;
  enemyHeroPowerstats = 0;
  loading = false;
  showResult = false;
  fightResult: string;
  battleResult = {};
  constructor(
    public historyService: HistoryService,
    private heroApi: HeroAPIService,
    private storageService: LocalStorageService,
    public powerupsService: PowerupsService,
  ) { }

  ngOnInit(): void {
    this.selectedHero = this.storageService.selectedHeroesList.find(hero => hero.selected === true);
    this.getEnemy();
  }

  getEnemy(): void {
    this.heroApi.findById(Math.floor(731 * Math.random())).subscribe(response => {
      this.enemyHero = response;
    });
  }

  fight(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.showResult = true;
    }, 5000);
    this.calculatePowerstats();
    if (this.myHeroPowerstats > this.enemyHeroPowerstats) {
      this.fightResult = 'won';
    } else this.fightResult = 'lost';
    this.enemyHeroPowerstats = 0;
    this.myHeroPowerstats = 0;
    this.setBattleResult();
    this.historyService.addBattleToHistory(this.battleResult);
  }

  setBattleResult () {
    this.battleResult = {
      date: new Date(),
      heroName: this.selectedHero.name,
      enemyName: this.enemyHero.name,
      result: this.fightResult,
    };
  }

  calculatePowerstats(): void {
    for (let state in this.selectedHero.powerstats) {
      this.myHeroPowerstats += +this.selectedHero.powerstats[state];
    }
    for (let state in this.enemyHero.powerstats) {
      this.enemyHeroPowerstats += +this.enemyHero.powerstats[state];
    }
  }

  closeResult() {
    this.showResult = false;
    this.getEnemy();
  }
}
