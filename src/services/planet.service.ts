import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlanetService {
  constructor(private http: Http) {}

  planetUrl = `http://swapi.co/api/planets/`;

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
