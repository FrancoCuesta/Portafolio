import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-nanv',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './nanv.component.html',
  styleUrl: './nanv.component.scss'
})
export class NanvComponent {
  title = 'done';
  fileUrl: SafeResourceUrl | undefined;
  constructor(private sanitizer: DomSanitizer) {  }
  ngOnInit() {
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
}
