import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {LocalStorageService} from '../../services/localStorage.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService,
    private storageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    if (this.auth.getToken() && this.auth.isTokenStillValid()) {
      this.router.navigate(['/hero-selection']);
    }
  }

}
