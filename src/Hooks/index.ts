import { ExtensionHandler } from './Handler'

export class ExtensionHooks {
  public static async execute() {
    ExtensionHandler.initConfigurationChangeHandler()
  }
}
