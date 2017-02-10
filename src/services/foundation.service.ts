import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Foundation } from '../models/Foundation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FoundationService {
  constructor(private http: Http) {}

  private serverUrl: String = `http://localhost:3000`;

  public getFoundations(): Promise<Foundation[]> {
    return this.http.get(`${this.serverUrl}/foundations`)
      .toPromise()
      .then(foundations => foundations.json() as Foundation[])
      .catch(this.handleError);
  }

  public getFoundation(foundationId: number): Promise<Foundation> {
    return this.http.get(`${this.serverUrl}/foundation/${foundationId}`)
      .toPromise()
      .then(foundation => foundation.json() as Foundation)
      .catch(this.handleError);
  }

  public search(foundationName: string): Observable<Array<Foundation>> {
    return this.http.get(`${this.serverUrl}/foundations/search?name=${foundationName}`)
      .map(response => response.json() as Foundation[]);
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
