'use babel';

import atomPlayPianoView from './atom-play-piano-view';
import { CompositeDisposable } from 'atom';

let audioUrls = [];
const init = () => {
  audioUrls = [{
    note: 'DO+',
    key: '187'
  },{
    note: 'SI',
    key: '186'
  },{
    note: 'SIb',
    key: '185'
  },{
    note: 'LA',
    key: '184'
  },{
    note: 'LAb',
    key: '183'
  },{
    note: 'SOL',
    key: '182'
  },{
    note: 'FA#',
    key: '181'
  },{
    note: 'FA',
    key: '180'
  },{
    note: 'MI',
    key: '179'
  },{
    note: 'MIb',
    key: '178'
  },{
    note: 'RE',
    key: '177'
  },{
    note: 'DO#',
    key: '176'
  },{
    note: 'DO',
    key: '175'
  },{
    note: 'SI-',
    key: '174'
  },{
    note: 'SIb-',
    key: '173'
  },{
    note: 'LA-',
    key: '172'
  }];
  audioUrls.map((elem) => {
    elem.audio = new Audio(`https://www.freesound.org/data/previews/39/39${elem.key}_35187-lq.mp3`);
  })
}

init();

const playNote = (audio) => {
  audio.currentTime = 0;
  audio.play();
}

const playRandomNote = () => {
  const index = Math.floor(Math.random() * (audioUrls.length));
  const audio = audioUrls[index].audio;
  playNote(audio)
}

const findAudioNote = (note) => {
  return audioUrls.filter((elem) => elem.note === note)[0].audio;
}

export default {

  atomPlayPianoView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomPlayPianoView = new atomPlayPianoView(state.atomPlayPianoViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomPlayPianoView.getElement(),
      visible: false
    });
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-play-piano:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomPlayPianoView.destroy();
  },

  serialize() {
    return {
      atomPlayPianoViewState: this.atomPlayPianoView.serialize()
    };
  },

  toggle() {
    atom.workspace.observeTextEditors((editor) => {
      editor.onDidInsertText((e, text) => {
        switch(e.text){
          case '1': {
            playNote(findAudioNote('DO'));
            break;
          }
          case '2': {
            playNote(findAudioNote('RE'));
            break;
          }
          case '3': {
            playNote(findAudioNote('MI'));
            break;
          }
          case '4': {
            playNote(findAudioNote('FA'));
            break;
          }
          case '5': {
            playNote(findAudioNote('SOL'));
            break;
          }
          case '6': {
            playNote(findAudioNote('LA'));
            break;
          }
          case '7': {
            playNote(findAudioNote('SI'));
            break;
          }
          case '8': {
            playNote(findAudioNote('DO+'));
            break;
          }
          case '{}': {
            playNote(findAudioNote('DO'));
            playNote(findAudioNote('MI'));
            playNote(findAudioNote('SOL'));
            break;
          }
          case '[]': {
            playNote(findAudioNote('FA'));
            playNote(findAudioNote('LA'));
            playNote(findAudioNote('DO'));
            break;
          }
          case '()': {
            playNote(findAudioNote('MI'));
            playNote(findAudioNote('SOL'));
            playNote(findAudioNote('SI'));
            break;
          }
          case '\'\'': {
            playNote(findAudioNote('RE'));
            playNote(findAudioNote('FA'));
            playNote(findAudioNote('LA'));
            break;
          }
          case '\"\"': {
            playNote(findAudioNote('SOL'));
            playNote(findAudioNote('MI'));
            playNote(findAudioNote('DO+'));
            break;
          }
          default: {
            playRandomNote();
          }
        }
      })
    })
    console.log('atomPlayPiano was toggled!');
  }

};
