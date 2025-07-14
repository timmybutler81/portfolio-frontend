import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://portfolio-backend-v1-rees.onrender.com/api';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getReadme(id: number): Observable<string> {
    return this.http.get(`${this.apiUrl}/projects/${id}/readme`, {
      responseType: 'text'
    });
  }
}

