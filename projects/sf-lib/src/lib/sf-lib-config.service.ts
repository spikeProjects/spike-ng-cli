import { InjectionToken } from '@angular/core';
import { SfLibConfig  } from './sf-lib-config';

export const SfLibConfigService = new InjectionToken<SfLibConfig>(
  'TestLibConfig'
);
