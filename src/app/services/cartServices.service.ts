import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
apiUrl = 'http://localhost:9000';

constructor(private http: HttpClient){

}


getAllItems = () => this.http.get('http://localhost:9000');
}


