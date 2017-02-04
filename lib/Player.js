'use babel'

import noteMap from './noteMap'

class Player {

  init = () => {
    if(!this.initialized){
      this.audioUrls = noteMap.map((elem) => {
        elem.audio = new Audio(`https://www.freesound.org/data/previews/39/39${elem.key}_35187-lq.mp3`)
        return elem
      })
    }
    this.initialized = true
    this.song = null
  }

  toggleMute = () => {
    this.activated = !this.activated
  }

  findAudioNote = (note) => {
    return this.audioUrls.filter((elem) => elem.note === note)[0].audio
  }

  playRandomNote = () => {
    const index = Math.floor(Math.random() * (this.audioUrls.length))
    const audio = this.audioUrls[index].audio
    this.playNote(audio)
  }

  playNextNote = () => {
    const { playNote, findAudioNote, song, nextNote } = this
    playNote(findAudioNote(song[nextNote]))
    this.nextNote = nextNote === song.length - 1 ? 0 : nextNote + 1
  }

  playNote = (audio) => {
    if (this.activated) {
      audio.currentTime = 0
      audio.play()
    }
  }

  setSong = (song) => {
    this.song = song
    this.nextNote = 0
  }

}

export default new Player()
