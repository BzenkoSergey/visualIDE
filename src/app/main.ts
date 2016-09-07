import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { IndexModule } from './web/containers/index/index.module';
if (process.env.ENV === 'production') {
	enableProdMode();
}
platformBrowserDynamic().bootstrapModule(IndexModule);