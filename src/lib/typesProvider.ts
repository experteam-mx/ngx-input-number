import { Injectable, Provider } from '@angular/core';

export class inputConfigs {
    groupSeparator?: string;
    radixPoint?: string;
}

@Injectable({ providedIn: 'root' })
export abstract class typesProvider {
  abstract get config(): inputConfigs;
}

@Injectable({ providedIn: 'root' })
export class defaultTypesProvider extends typesProvider {
  get config(): inputConfigs {
    // return default config
    return {
        groupSeparator: ".",
        radixPoint: ","
    };
  }
}

export class inputConfigsHelp {
  config?: Provider;
}