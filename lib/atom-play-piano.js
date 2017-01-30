'use babel';
import { CompositeDisposable } from 'atom'
import Player from './Player'
import textHandler from './textHandler'
import { StarWars, Tetris } from './songs'

export default {

  atomPlayPianoView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    Player.init()
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-play-piano:toggle': () => this.toggle(),
      'atom-play-piano:set-song-star-wars': () => Player.setSong(StarWars),
      'atom-play-piano:set-song-tetris': () => Player.setSong(Tetris)
    }));
    this.subscriptions.add(atom.workspace.observeTextEditors((editor) => {
      this.subscriptions.add(editor.onDidInsertText((e, text) => {
        textHandler(text)
      }))
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  toggle() {
    Player.toggleMute()
  }

};
