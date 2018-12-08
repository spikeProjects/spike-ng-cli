import { NgModule, ModuleWithProviders } from '@angular/core';
import { SfLibComponent } from './sf-lib.component';

import { SfLibConfig } from './sf-lib-config';
import { SfLibConfigService } from './sf-lib-config.service';
// import { DataService } from './data.service';

@NgModule({
  imports: [
  ],
  declarations: [SfLibComponent],
  exports: [SfLibComponent],
  providers: [
    // DataService
  ]
})
export class SfLibModule {
  static forRoot(config: SfLibConfig): ModuleWithProviders {
    return {
      ngModule: SfLibModule,
      providers: [
        {
          provide: SfLibConfigService,
          useValue: config
        }
      ]
    };
  }
}
