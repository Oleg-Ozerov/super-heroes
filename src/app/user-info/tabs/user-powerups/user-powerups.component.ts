import { Component, OnInit } from '@angular/core';
import {PowerupsService} from '../../../shared/services/powerups.service';

@Component({
  selector: 'app-user-powerups',
  templateUrl: './user-powerups.component.html',
  styleUrls: ['./user-powerups.component.scss']
})
export class UserPowerupsComponent implements OnInit {
  constructor(public powerupsService: PowerupsService) { }

  ngOnInit(): void {
  }

}
