import { Configure } from './Commands/Configure'
import { RegisterHelper } from './Utils/RegisterHelper'
import type { ExtensionContext } from 'vscode'

export class ExtensionRegistry {
  public static registerConfigureCommand(context: ExtensionContext) {
    context.subscriptions.push(RegisterHelper.registerCommand(Configure.ToggleLocaleProviderStatus))
  }
}
