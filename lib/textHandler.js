'use babel';

import Player from './Player'

const { playNote, findAudioNote, playNextNote, playRandomNote } = Player
export default (text) => {
    if(Player.song) {
      playNextNote()
    } else {
      switch(text) {
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
   }
}
