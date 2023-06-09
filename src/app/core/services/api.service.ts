import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { BASE_URL } from '../conf/app.config';

@Injectable()
export class ApiService {
	constructor(private http: HttpClient) {}

	get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
		return this.http.get<T>(`${BASE_URL}${path}`, { params });
	}

	put<T>(path: string, body = {}): Observable<T> {
		return this.http.put<T>(`${BASE_URL}${path}`, body);
	}


	post<T>(path: string, body = {},options={}): Observable<T> {
		return this.http.post<T>(`${BASE_URL}${path}`, body,options);
	}

	delete<T>(path: string, options = {}): Observable<T> {
		return this.http.delete<T>(`${BASE_URL}${path}`, options);
	}
}
