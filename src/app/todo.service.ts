import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    private apiUrl = "https://jsonplaceholder.typicode.com/todos"

    constructor(private http: HttpClient) {

    }

    getData() {
        return this.http.get(this.apiUrl).subscribe(data => {return data})
    }

}