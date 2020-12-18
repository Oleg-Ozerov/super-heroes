import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ALPHABET, API_URL} from '../shared/constants';
import {HeroAPIService} from '../shared/services/Hero-API.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hero-selection-page',
  templateUrl: './hero-selection-page.component.html',
  styleUrls: ['./hero-selection-page.component.scss']
})

export class HeroSelectionPageComponent implements OnInit {
  form: FormGroup;
  recentSearches = [];
  responseList;
  currentValue = '';
  constructor(private heroApi: HeroAPIService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      select: new FormControl(''),
      name: new FormControl('', [
        Validators.required
      ])
    });
  }

  findHeroes(request) {
    this.heroApi.findHero(request).subscribe((response) => {
      this.responseList = response.results;
      this.currentValue = request;
    });

  }

  submit() {
    this.recentSearches = [this.form.value.name, ...this.recentSearches];
    this.findHeroes(this.form.value.name);
  }
}
