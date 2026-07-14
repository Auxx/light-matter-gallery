import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { Gallery } from './gallery/gallery';
import { ThumbStrip } from './thumb-strip/thumb-strip';

createApplication({ providers: [ provideBrowserGlobalErrorListeners() ] })
  .then(app => {
    customElements.define('lm-gallery', createCustomElement(Gallery, { injector: app.injector }));
    customElements.define('lm-thumb-strip', createCustomElement(ThumbStrip, { injector: app.injector }));
  })
  .catch(err => console.error(err));
