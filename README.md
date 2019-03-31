# hxterm
hxterm package brings XTerm color palette right into your Hyper.

## screenshot:
![screenshot](https://raw.githubusercontent.com/dehahost/hxterm/master/screenshot.png "screenshot")

## installation and possible usage:
### a/ for shell interfaces (bash, usually):
Make sure you have `git` package installed on your system. If not, do it. Then:
`cd` into `~/.hyper_plugins/local/` and `git clone https://github.com/dehahost/hxterm`.
### b/ for graphical interfaces (Windows, usually):
Go to the [latest release on repo's Releases page](https://github.com/dehahost/hxterm/releases/latest) and download _Source code (zip)_ form the Assets list box.
Otherwise if you want have absolutely newest-from-development version grab your mouse cursor and point it on "Clone or download" text and do a left mouse click. Inside the dropped box then kindly click on "Download ZIP".
Extract downloaded ZIP into `%userprofile%\.hyper_plugins\local\`.
### after:
After doing a/ or b/, open `.hyper.js` (to be found in the user's home folder) in `nano` or your top-best-favorite text editor and add into `localPlugins` array variable this value string: `"hxterm"`.
It will look like this:
```javascript
/* ... */
localPlugins: ["hxterm"],
/* ... */
```
Save it and exit the editor. Then close and open your Hyper and you are ready, baby. :*

## Author
dehahost. Just me.
