import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}