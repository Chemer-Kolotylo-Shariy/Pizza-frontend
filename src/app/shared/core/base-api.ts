import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class BaseApi {
  private baseUrl = 'http://localhost:8888/';

  public constructor(public http: Http){}

  private getUrl(url: string = ''): string {
    var urlMain = this.baseUrl;
    return urlMain + url;
  }

  public get(url: string = ''): Observable<any>{
    return this.http.get(this.getUrl(url))
      .map((response: Response) => response.json());
  }

  public getWithParams(url: string = '', obj: any): Observable<any>{
    return this.http.get(this.getUrl(url), obj)
      .map((response: Response) => response.json());
  }

  public post(url: string = '', data: any = {}): Observable<any>{
    return this.http.post(this.getUrl(url), data)
      .map((response: Response) => response.json());
  }

  public put(url: string = '', data: any = {}): Observable<any>{
    return this.http.put(this.getUrl(url), data)
      .map((response: Response) => response.json());
  }
}
