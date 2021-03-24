import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }

    getAllProducts() {
        return this.httpClient.get(`http://localhost:3000/api/products`).toPromise();

    }
}