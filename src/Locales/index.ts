import { env } from 'vscode'
import type { Locale } from '../Utils/Typings'

export class LocaleFactory {
  // VSCode workspace language
  public static get locale() {
    return env.language
  }

  public static get supportLocales() {
    return ['en-US', 'zh-CN']
  }

  public static useEnLocale(locale: Locale) {
    return locale === 'en-US'
  }

  public static ToggleLocaleTip(locale: Locale): string {
    return LocaleFactory.useEnLocale(locale) ? 'Locale changed to: en-US' : '已切换到：简体中文'
  }
}
