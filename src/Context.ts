import type { ExtensionContext, TextDocument } from 'vscode'

export class Context {
  ext: ExtensionContext = undefined!
  doc: TextDocument | undefined

  userRoot?: string
  postsRoot?: string

  get subscriptions() {
    return this.ext.subscriptions
  }
}

export const ctx = new Context()
