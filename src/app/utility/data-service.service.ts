import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private http: HttpClient) { }
    
    get(url: string, params: any) {
        return this.http.get(url, { params: params });
    }
}