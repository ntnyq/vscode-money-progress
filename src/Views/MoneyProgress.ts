import { window } from 'vscode'
import { ctx } from '../Context'
import type { WebviewView, WebviewViewProvider } from 'vscode'

export class MoneyProgressProvider implements WebviewViewProvider {
  public static readonly viewId = 'money-progress'
  public view: WebviewView | undefined

  public update() {
    if (!this.view) return
    console.log(`View - ${MoneyProgressProvider.viewId} updated`)
  }

  public async refresh() {
    const editor = window.activeTextEditor
    if (!editor || editor.document !== ctx.doc) return
    if (!this.view) return

    this.view.webview.options = {
      enableScripts: true,
      localResourceRoots: [ctx.ext.extensionUri],
    }

    this.view.webview.onDidReceiveMessage(async ({ _command }) => {})
  }

  public async resolveWebviewView(webviewView: WebviewView) {
    this.view = webviewView
    this.refresh()
  }
}
