import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/observable';
 
@Injectable()
export class DrugService {

  private drugURL;
  headers: Headers;
  options: RequestOptions
 
  constructor(private http: Http) {
      this.drugURL = 'assets/drugs.json';
      this.headers = new Headers ({'content-type': 'application/json'});
      this.options = new RequestOptions ({headers: this.headers}); 
  }

  //ngOnInit() { this.getDrugs(); }
 
  getDrugs(): Observable<any> {
    return this.http.get(this.drugURL)
      .map(this.extractData)
      .catch(this.handleError); 
  }

  addDrug (detail: Array<any>): Observable<any> {
    return this.http.post(this.drugURL, {detail}, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteDrug (id: number): Observable<any> {
    return this.http.delete(this.drugURL, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateDrug (id: number): Observable<any> {
    return this.http.put(this.drugURL, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }



  private extractData (res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() ||  '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
   
}