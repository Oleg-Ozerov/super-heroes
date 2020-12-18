import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class HistoryService {
   battleHistory = [];

   addBattleToHistory(result: object) {
     this.battleHistory = [result, ...this.battleHistory];
   }
}
