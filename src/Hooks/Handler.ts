import { commands, window, workspace } from 'vscode'
import { Constants } from '../Constants'
import { BUILTIN_COMMANDS } from '../Constants/Shared'

export class ExtensionHandler {
  public static initConfigurationChangeHandler() {
    workspace.onDidChangeConfiguration(async ds => {
      if (!ds.affectsConfiguration(Constants.ExtensionIdentifier)) return
      const RESTART_NOW = 'RESTART_NOW'
      const result = await window.showInformationMessage(
        `${Constants.ExtensionDisplayName}的配置需要在 VS Code 重置后生效`,
        RESTART_NOW,
      )
      if (result !== RESTART_NOW) return
      commands.executeCommand(BUILTIN_COMMANDS.RELOAD_WINDOW)
    })
  }
}
