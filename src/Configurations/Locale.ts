import { workspace } from 'vscode'
import { Constants } from '../Constants'
import type { IConfiguration, Locale } from '../Utils/Typings'

export class LocaleConfiguration implements IConfiguration<Locale> {
  public identifier = 'locale'

  public defaultConfig: Locale = 'en-US'

  public read(): Locale {
    return workspace
      .getConfiguration(Constants.ExtensionIdentifier)
      .get<Locale>(this.identifier, this.defaultConfig)
  }

  public write(input: Locale): void {
    workspace.getConfiguration(Constants.ExtensionIdentifier).update(this.identifier, input, true)
  }
}
