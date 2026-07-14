import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { Gallery } from './gallery/gallery';

createApplication({ providers: [ provideBrowserGlobalErrorListeners() ] })
  .then(app => {
    customElements.define('lm-gallery', createCustomElement(Gallery, { injector: app.injector }));
  })
  .catch(err => console.error(err));
