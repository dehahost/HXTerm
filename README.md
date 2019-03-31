# hxterm
hxterm package brings XTerm color palette right into your Hyper.

## screenshot:
![screenshot](https://raw.githubusercontent.com/dehahost/hxterm/master/screenshot.png "screenshot")

## installation and possible usage:
### for shell interfaces (bash, usually):
Make sure you have `git` package installed on your system. If not, do it. Then:
`cd` into `~/.hyper_plugins/local/` and `git clone https://github.com/dehahost/hxterm`.
### for graphical interfaces (Windows, usually):
Download this repo in ZIP by clicking green button with "Clone or download" text. Inside shown dropdown hit "Download ZIP".
Extract downloaded ZIP into `%userprofile%\.hyper_plugins\local\`.
### after:
After this open `.hyper.js` in `nano` or your top-best-favorite text editor and add into `localPlugins` array variable this value string: `"hxterm"`.
It will look like this:
```javascript
/* ... */
localPlugins: ["hxterm"],
/* ... */
```
Save it and exit the editor. Then close and open your Hyper and you are ready, baby. :*

## Author
dehahost. Just me.
