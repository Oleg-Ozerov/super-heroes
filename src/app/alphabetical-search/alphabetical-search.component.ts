import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ALPHABET} from '../shared/constants';
import {PrivateExportAliasingHost} from '@angular/compiler-cli/src/ngtsc/imports';

@Component({
  selector: 'app-alphabetical-search',
  templateUrl: './alphabetical-search.component.html',
  styleUrls: ['./alphabetical-search.component.scss']
})
export class AlphabeticalSearchComponent implements OnInit {
  @Output() selectLetterEvent = new EventEmitter<string>();
  currentLetter = 'A';
  alphabet = ALPHABET;
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  setFindRequest(value) {
    this.currentLetter = value;
    this.selectLetterEvent.emit(value);
  }

  toggleList() {
    this.isVisible = !this.isVisible;
  }
}
