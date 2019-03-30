/*
 *                                                                                              _|_|_|_|_|
 *              _|  _|        _|                    _|                                          _|_|_|_|_|        
 *    _|  _|  _|_|_|_|_|      _|_|_|    _|    _|  _|_|_|_|    _|_|    _|  _|_|  _|_|_|  _|_|    _|_|_|_|_|        
 *  _|  _|      _|  _|        _|    _|    _|_|      _|      _|_|_|_|  _|_|      _|    _|    _|  _|_|_|_|_|        
 *            _|_|_|_|_|      _|    _|  _|    _|    _|      _|        _|        _|    _|    _|  _|_|_|_|_|        
 *              _|  _|        _|    _|  _|    _|      _|_|    _|_|_|  _|        _|    _|    _|  _|_|_|_|_|        
 *
*/
/*
 *  Theme made with love to xterm and hyper by dehahost.
 *
 */

// == xterm colors ==
// -- Deep colors
const deep_black = "#000000"
const deep_red = "#CD0000";
const deep_green = "#00CD00";
const deep_yellow = "#CDCD00";
const deep_blue = "#0000EE";
const deep_magenta = "#CD00CD";
const deep_cyan = "#00CDCD";
const deep_white = "#E5E5E5"
// -- Light colors
const light_black = "#7F7F7F";
const light_red = "#FF0000";
const light_green = "#00FF00";
const light_yellow = "#FFFF00";
const light_blue = "#5C5CFF";
const light_magenta = "#FF00FF";
const light_cyan = "#00FFFF";
const light_white = "#FFFFFF";

// == Configuration data object ==
const hxterm_config = {
  fontFamily: '"Consolas", "Ubuntu Mono", "Monospace Regular", "SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
  fontSize: 16,
  foregroundColor: light_white,
  backgroundColor: deep_black,
  cursorColor: light_white,
  colors: [
    deep_black,
    deep_red,
    deep_green,
    deep_yellow,
    deep_blue,
    deep_magenta,
    deep_cyan,
    deep_white,
    light_black,
    light_red,
    light_green,
    light_yellow,
    light_blue, 
    light_magenta,
    light_cyan,
    light_white
  ]
};

// == Export right into Hyper! ==
exports.decorateConfig = (config) => {
  return Object.assign({}, config, hxterm_config, {
    css: `
      ${config.css || ''}
    `
  });
}