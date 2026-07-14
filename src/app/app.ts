import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lmg-root',
  imports: [],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('light-matter-gallery');
}
