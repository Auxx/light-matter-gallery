import { Component, signal } from '@angular/core';

@Component({
  selector: 'lmg-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('light-matter-gallery');
}
