import { commands } from 'vscode'
import { Utils } from '.'
import type { HoverProvider } from 'vscode'
import type { ICommandRegistry } from './Typings'

export class RegisterHelper {
  public static registerCommand(input: ICommandRegistry) {
    return commands.registerCommand(Utils.composeCommand(input.command), input.callback)
  }

  public static registerHoverProvider(_input: HoverProvider) {}
}
