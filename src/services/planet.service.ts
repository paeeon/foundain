import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { Http, Headers, Response } from '@angular/http';
import apiKeys from '../../apiKeys';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlanetService {
  constructor(private http: Http) {}

  headers = new Headers({
    'Content-Type': 'multipart/form-data',
    'Ocp-Apim-Subscription-Key': '19c5daf8d07b48f79c3464016cee958f'
  });
  planetUrl = `http://swapi.co/api/planets/`;
  imageUrl = `https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=`;

  public getPlanets(): Promise<Planet[]> {
    return this.http.get(`${this.planetUrl}`)
      .toPromise()
      .then(response => response.json().results as Planet[])
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
  }
}
