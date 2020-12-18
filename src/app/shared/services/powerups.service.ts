import {Injectable} from '@angular/core';

@Injectable ({providedIn: 'root'})
export class PowerupsService {
  powerupList = [{
    title: 'Captain America shield',
    imageUrl: 'https://www.clipartmax.com/png/middle/211-2115285_america-clipart-captain-america-shield-captain-america-shield-icon.png',
    descriprion: 'durability +10',
    usesLeft: 3,
  },
    {
      title: 'Mjolnir',
      imageUrl: 'https://liquipedia.net/commons/images/thumb/d/d4/Mjollnir_static_charge.png/100px-Mjollnir_static_charge.png',
      descriprion: 'power +10',
      usesLeft: 3,
    },
    {
      title: 'Ironman nano armor',
      imageUrl: 'https://p7.hiclipart.com/preview/485/936/903/the-iron-man-icon-ironman-icon-png.jpg',
      descriprion: 'combat +10',
      usesLeft: 3
    },
    {
      title: 'Dr.Strange`s cloak',
      imageUrl: 'https://i.pinimg.com/474x/d5/14/ff/d514ffd971674babdd4cb8a6c476412c.jpg',
      descriprion: 'intelligence  +10',
      usesLeft: 3
    },
    {
      title: 'Green lantern`s ring',
      imageUrl: 'https://www.superherorings.com/image/catalog/Green_Lantern_Ring_Snake.jpg',
      descriprion: 'strength +10',
      usesLeft: 3
    },
    {
      title: 'Flash boots',
      imageUrl: 'https://freepngimg.com/download/the_flash/12-2-flash.png',
      descriprion: 'speed +10',
      usesLeft: 3
    }];
}
