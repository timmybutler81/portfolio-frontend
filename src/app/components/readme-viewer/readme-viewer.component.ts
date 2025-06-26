import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { marked } from 'marked';

@Component({
  selector: 'app-readme-viewer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './readme-viewer.component.html',
  styleUrls: ['./readme-viewer.component.css']
})
export class ReadmeViewerComponent implements OnChanges {
  @Input() markdown: string | null = null;
  html: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

ngOnChanges(): void {
  if (!this.markdown) return;
    const rendered = marked.parse(this.markdown ?? '') as string;
    this.html = this.sanitizer.bypassSecurityTrustHtml(rendered);
}
}
