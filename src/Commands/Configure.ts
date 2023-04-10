import { window } from 'vscode'
import { ExtensionConfiguration } from '../Configurations'
import { LocaleFactory } from '../Locales'
import type { ICommandRegistry, Locale as LocaleType } from '../Utils/Typings'

export class Configure {
  public static get ToggleLocaleProviderStatus(): ICommandRegistry {
    return {
      command: 'toggleLocale',
      callback: async () => {
        const locale = await window.showQuickPick(LocaleFactory.supportLocales)
        if (!locale) return
        ExtensionConfiguration.locale.write(<LocaleType>locale)
        window.showInformationMessage(LocaleFactory.ToggleLocaleTip(<LocaleType>locale))
      },
    }
  }
}
