# atom-play-piano package

Piano notes are played as you code... amazing !

## Instructions

### First : Activate the plug-in
Use the activate menu item in `Packages => Atom play piano => Toggle !`

You should already hear a beautiful piano sound each time you add a character to your editor !

Notes are mostly random, but there is some mapping :

 - `1`: DO
 - `2`: RE
 - `3`: MI
 - `4`: FA
 - `5`: SOL
 - `6`: LA
 - `7`: SI
 - `8`: DO
 - `{}`: DO, MI ,SOL
 - `()`: MI, SOL ,SI
 - `[]`: FA, LA ,DO
 - `''`: RE, FA ,LA
 - `""`: SOL, MI ,DO+
 - `Others`: random

###To activate a song :
Use the "Choose a song" menu item in `Packages => Atom play piano => Choose a song => SongName`

Now notes will follow the song you choosed.


### Add a custom song :
You also have three free slots to tune in your own songs

 - Go to the package settings
 - Add a name for your custom song
 - Code your custom song as notes separated by commas : `DO, RE, MI, FA, SOL`
 - Use the `Refresh settings` sub menu to apply changes

Availables notes (Currently only supporting french notation sry !) :
 - Use the note name: `DO, RE, MI, FA, SOL, LA, SI`
 - Use the alterations: `DOb (that's a b) or DO#`
 - To use a higher pitch note use `+` and for a lower use `-`: `DO+ DO- DOb+ DO#-`
 - Note are availables from `SOL#-` to `SOL+`

If you want to share your work, feel free to submit a pull request ;) !

 Have fun !
