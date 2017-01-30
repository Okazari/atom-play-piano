import noteMap from './noteMap'

class Player {
  init() {
    this.audioUrls = noteMap.map((elem) => {
      elem.audio = new Audio(`https://www.freesound.org/data/previews/39/39${elem.key}_35187-lq.mp3`);
      return elem;
    })
  }

  findAudioNote = (note) => {
    return this.audioUrls.filter((elem) => elem.note === note)[0].audio;
  }

  playRandomNote() {
    const index = Math.floor(Math.random() * (audioUrls.length));
    const audio = audioUrls[index].audio;
    this.playNote(audio)
  }

  playNextNote() {
  }

  playNote(audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

export default new Player()
