import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  computed,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  input,
  viewChild,
  ViewEncapsulation
} from '@angular/core';
import { ImageItem } from '../types/image-item';

const fileNameRegex = /.*\/([a-zA-Z0-9.-_[\]()]+)$/;

@Component({
  selector: 'lmg-thumb-strip',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './thumb-strip.html',
  styleUrl: './thumb-strip.scss',
  encapsulation: ViewEncapsulation.ExperimentalIsolatedShadowDom
})
export class ThumbStrip {
  private readonly document = inject(DOCUMENT);

  private readonly contents = viewChild.required<ElementRef<HTMLDivElement>>('wrapper');

  readonly images = input<ImageItem[] | undefined>();

  readonly newTab = input<string | false>(false);

  readonly selectedIndex = input<number | undefined>();

  readonly width = input(240);

  readonly height = input(135);

  protected readonly standAlone = computed(() => this.images() === undefined);

  private readonly links = computed(() => Array.from(this.contents().nativeElement.querySelectorAll('a')));

  protected readonly items = computed<ImageItem[]>(() => {
    const images = this.images();

    return images === undefined
      ? this.links()
        .map(link => ({
          fullSize: link.getAttribute('href'),
          thumbnail: link.querySelector('img')?.getAttribute('src') ?? null,
          name: link.getAttribute('title'),
          alt: link.querySelector('img')?.getAttribute('alt') ?? null
        }))
        .filter((item): item is ImageItem => item.fullSize !== null && item.thumbnail !== null)
        .map(item => ({
          ...item,
          name: this.getName(item)
        }))
      : images;
  });

  constructor() {
    effect(() => {
      console.log(this.items());
    });
  }

  readonly imageClicked = (item: ImageItem) => {
    if (this.standAlone()) {

      if (this.newTab() === false) {
        this.document.location.href = item.fullSize;
        return;
      }

      this.document.defaultView?.open(item.fullSize, '_blank');
      return;
    }
  };

  private readonly getName = (item: ImageItem): string => {
    if (item.name !== null) {
      return item.name;
    }

    if (item.fullSize !== null) {
      return item.fullSize.replace(fileNameRegex, '$1');
    }

    return '-';
  };
}
