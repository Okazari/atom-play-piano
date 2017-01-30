'use babel';
import { CompositeDisposable } from 'atom'
import textHandler from './textHandler'

export default {

  atomPlayPianoView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    console.log("activate")
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-play-piano:toggle': () => this.toggle()
    }));
    this.subscriptions.add(atom.workspace.observeTextEditors((editor) => {
      this.subscriptions.add(editor.onDidInsertText((e, text) => {
        textHandler(text)
      }))
    }))
  },

  deactivate() {
    console.log("deactivate")
    this.subscriptions.dispose();
  },

  toggle() {
    atom.workspace.observeTextEditors((editor) => {
      editor.onDidInsertText((e, text) => {
        textHandler(text)
      })
    })
    console.log('atomPlayPiano was toefeffefeggled!');
  }

};
