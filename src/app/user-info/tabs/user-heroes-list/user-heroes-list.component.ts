import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../../shared/services/localStorage.service';

@Component({
  selector: 'app-user-heroes-list',
  templateUrl: './user-heroes-list.component.html',
  styleUrls: ['./user-heroes-list.component.scss']
})
export class UserHeroesListComponent implements OnInit {
  constructor(
    public storageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    if (this.storageService.isItFirstInit) {
      this.storageService.selectedHeroesList[this.storageService.selectedHeroesList.length - 1].selected = true;
      this.storageService.isItFirstInit = false;
    }
  }

}
