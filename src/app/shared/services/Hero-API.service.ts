import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../constants';

@Injectable({providedIn: 'root'})
export class HeroAPIService {

  id;

  constructor(private http: HttpClient) {
  }

  findHero(request): Observable<any> {
    return this.http.get(`${API_URL}search/${request}`);
  }

  findById(id): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  setId(id) {
    this.id = id;
  }

}
