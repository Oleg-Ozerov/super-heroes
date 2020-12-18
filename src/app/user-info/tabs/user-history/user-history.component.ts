import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../../../shared/services/history.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {
  battleHistory;
  constructor(
    public historyService: HistoryService,
  ) { }

  ngOnInit(): void {
    this.battleHistory = this.historyService.battleHistory;
  }

  sortBy(param) {
    this.battleHistory = this.battleHistory.sort((a, b) => (a.param > b.param) ? 1 : -1);
  }

}
