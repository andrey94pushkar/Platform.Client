import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {
  protected apiUrl = 'http://api.platform.com.ua';
  private headers = new Headers({'Content-Type': 'application/json'});

  protected options() {
        const token = JSON.parse(localStorage.getItem('access_token'));
        if (token) {
          this.headers.append('Authorization', 'Bearer ' + token);
        }
        return new RequestOptions({ headers: this.headers });
    }
}
