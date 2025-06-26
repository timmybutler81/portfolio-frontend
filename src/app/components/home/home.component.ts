import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { NgFor, NgIf } from '@angular/common';
import { ReadmeViewerComponent } from '../readme-viewer/readme-viewer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, ReadmeViewerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];
  readmeMd: string | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: data => this.projects = data,
      error: err => console.error('Error loading projects:', err)
    });
  }

showReadme(id: number) {
  this.projectService.getReadme(id).subscribe({
    next: md  => this.readmeMd = md,    // md is plain string
    error: err => console.error(err)
  });
}
}
