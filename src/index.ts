import { ctx } from './Context'
import { ExtensionHooks } from './Hooks'
import { ExtensionRegistry } from './Registry'
import type { ExtensionContext } from 'vscode'

export async function activate(context: ExtensionContext) {
  ctx.ext = context

  await ExtensionHooks.execute()

  ExtensionRegistry.registerConfigureCommand(context)
}

export function deactivate() {}
