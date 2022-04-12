import { InjectionToken } from '@angular/core';
import { inputConfigs } from './types';

export const INPUT_CONFIG_TOKEN = new InjectionToken<inputConfigs>('INPUT_CONFIG');