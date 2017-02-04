'use babel';
import { CompositeDisposable } from 'atom'
import Player from './Player'
import textHandler from './textHandler'
import { StarWars, Tetris } from './songs'
import generateConfig from './config'
const nbCustomSongs = 3

export default {

  atomPlayPianoView: null,
  modalPanel: null,
  subscriptions: null,
  config: generateConfig(nbCustomSongs),

  activate(state) {
    Player.init()
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-play-piano:toggle': () => this.toggle(),
      'atom-play-piano:refresh-songs': () => this.reloadPackage(),
      'atom-play-piano:set-song-star-wars': () => Player.setSong(StarWars),
      'atom-play-piano:set-song-tetris': () => Player.setSong(Tetris)
    }));
    const customSongs = this.getCustomSongs()
    Object.keys(customSongs).forEach(songKey => this.addCustomSong(customSongs[songKey].songName, customSongs[songKey].song))
    this.subscriptions.add(atom.workspace.observeTextEditors((editor) => {
      this.subscriptions.add(editor.onDidInsertText((e) => {
        textHandler(e.text)
      }))
    }))
  },

  reloadPackage() {
    this.deactivate()
    this.activate()
  },

  getCustomSongs() {
    return atom.config.get('atom-play-piano.customSongs')
  },

  addCustomSong(name, song) {
    const customKey = 'custom-' + name.trim()
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      ['atom-play-piano:set-song-' + customKey] : () => Player.setSong(song)
    }))
    this.subscriptions.add(atom.menu.add(this.createCustomSongMenuItem(name, customKey)))
  },

  createCustomSongMenuItem(name, customKey) {
    return [
      {
        "label": "Packages",
        "submenu":[
          {
            "label": "Atom play piano",
            "submenu": [
              {
                "label": "Choose a song",
                "submenu": [
                  {
                    "label": name,
                    "command": 'atom-play-piano:set-song-' + customKey,
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  toggle() {
    Player.toggleMute()
  }

};
