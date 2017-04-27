import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Multiplanservice{
    private _url:string="https://jsonplaceholder.typicode.com/posts"
    constructor(private _http:Http){
        console.log('testing servcie');
    }
    getMultiplan(){
        return this._http.get(this._url)
       .map((response:Response)=>response.json());
                     //  .map(res=>res.json())

    }
    getCurrentTime()
        {
            return this._http.get('https://jsonplaceholder.typicode.com/posts')
                .map(res=>res.json())
        }
}