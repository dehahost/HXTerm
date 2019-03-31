# hxterm
hxterm package brings XTerm color palette right into your Hyper.

## screenshot:
![screenshot](https://raw.githubusercontent.com/dehahost/hxterm/master/screenshot.png "screenshot")

## simple installation sensation:
Make sure, you disabled your previous theme. If you are using default, that's perfect.
Open your Hyper and type in `hyper i hxterm`, push _[ Enter ]_ and there you go. :*

## hardcore installation sensation:
If you for some reason do not like built-in automated plugin installation, you can follow this installguide section instead!

### 1a/ for shell interfaces (bash, usually):
Make sure you have `git` package installed on your system. Then:
`cd` into `~/.hyper_plugins/local/` and `git clone https://github.com/dehahost/hxterm`.

If you prefer `npm`, make sure you have installed it on your system. Create new folder somewhere, `cd` into it and then execute `npm i hxterm` (you may need `sudo` power for this command). After doing quick `ls` to check stuff is there, `cd` into `./node_modules/` and then `cp -r hxterm/ ~/.hyper_plugins/local` (or `mv`, it's up to you).

### 1b/ for graphical interfaces (Windows, usually):
Go to the [latest release on hxterm Releases page](https://github.com/dehahost/hxterm/releases/latest) and download _Source code (zip)_ form the _Assets list_ box.

Otherwise if you want have absolutely newest-from-development version grab your mouse cursor and point it on _Clone or download_ text and do a left mouse click. Inside the dropped box then kindly click on _Download ZIP_.

Extract downloaded ZIP into `%userprofile%\.hyper_plugins\local\`.

### 2/ after:
After doing 1a/ or 1b/, open `.hyper.js` (to be found in the user's home folder) in `nano` or your top-best-favorite text editor and add into `localPlugins` array variable this value string: `"hxterm"`.
It will look like this:
```javascript
/* ... */
localPlugins: ["hxterm"],
/* ... */
```
Save it and exit the editor. Then close and open your Hyper and you are ready, baby. :*

## author:
dehahost.

## badges:
![GitHub release](https://img.shields.io/github/release/dehahost/hxterm.svg?color=green&style=popout-square)
![GitHub repo size](https://img.shields.io/github/repo-size/dehahost/hxterm.svg?color=green&style=popout-square)
![GitHub repo license](https://img.shields.io/github/license/dehahost/hxterm.svg?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/dehahost/hxterm.svg?style=popout-square)
![GitHub Release Date](https://img.shields.io/github/release-date/dehahost/hxterm.svg?style=popout-square)

![npm (tag)](https://img.shields.io/npm/v/hxterm/latest.svg?style=popout-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/hxterm.svg?style=popout-square)
