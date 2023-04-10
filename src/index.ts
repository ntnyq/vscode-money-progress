import { ExtensionHooks } from './Hooks'
import { ExtensionRegistry } from './Registry'
import type { ExtensionContext } from 'vscode'

export async function activate(context: ExtensionContext) {
  await ExtensionHooks.execute()

  ExtensionRegistry.registerConfigureCommand(context)
}

export function deactivate() {}
