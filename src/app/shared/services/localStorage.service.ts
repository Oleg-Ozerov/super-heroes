import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {
  selectedHeroesList = [];
  isItFirstInit = true;
  constructor() {
  }

  addToSelectedList(hero) {
    this.selectedHeroesList = [...this.selectedHeroesList, hero];

  }
}
