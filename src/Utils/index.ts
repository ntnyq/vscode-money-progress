import { Uri, env } from 'vscode'
import { Constants } from '../Constants'
import { Logger } from './Logger'

export class Utils {
  public static Logger = Logger

  public static composeCommand(command: string) {
    return `${Constants.ExtensionIdentifier}.${command}`
  }

  public static openExternalURL(url: string) {
    const uri = Uri.parse(url)
    env.openExternal(uri)
  }
}
