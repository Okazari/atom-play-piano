'use babel'

export default (nbCustomSongs) => {
  const config = {
    customSongs: {
      type: 'object',
      description: 'You can add up to three custom songs using the availables keys (described in the readme)',
      properties: {}
    }
  }
  for (let i = 1; i <= nbCustomSongs; i++){
    config.customSongs.properties[i] = {
      type: 'object',
      properties: {
        songName: {
          type: 'string',
          default: 'Custom ' + i,
          description: 'Choose a name for your custom song n°' + i
        },
        song: {
          type: 'array',
          default: ['DO','RE','MI','FA','SOL'],
          description: 'Code you song n°' + i + ' right here'
        }
      }
    }
  }
  return config
}
