


//------------------- 引擎模板 模块 -------------------

;(function ($) {
  'use strict'
  var tmpl = function (str, data) {
    var param1 = tmpl.arg + ',tmpl';
    var param2 = 'var _e=tmpl.encode' + tmpl.helper + ",_s='" + str.replace(tmpl.regexp, tmpl.func) + "';return _s;";
    var f = new Function(param1,param2);
    return f(data, tmpl);
  }
  tmpl.regexp =
      /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g
  tmpl.func = function (s, p1, p2, p3, p4, p5) {
    if (p1) {
      // whitespace, quote and backspace in HTML context
      return (
          {
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            ' ': ' '
          }[p1] || '\\' + p1
      )
    }
    if (p2) {
      // interpolation: {%=prop%}, or unescaped: {%#prop%}
      if (p2 === '=') {
        return "'+_e(" + p3 + ")+'"
      }
      return "'+(" + p3 + "==null?'':" + p3 + ")+'"
    }
    if (p4) {
      // evaluation start tag: {%
      return "';"
    }
    if (p5) {
      // evaluation end tag: %}
      return "_s+='"
    }
  }

  tmpl.encReg = /[<>&"'\x00]/g // eslint-disable-line no-control-regex
  tmpl.encMap = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
  }
  tmpl.encode = function (s) {
    // eslint-disable-next-line eqeqeq
    return (s == null ? '' : '' + s).replace(tmpl.encReg, function (c) {
      return tmpl.encMap[c] || ''
    })
  }

  tmpl.arg = 'o'
  tmpl.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);}" + ',include=function(s,d){_s+=tmpl(s,d);}'
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return tmpl
    })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = tmpl
  } else {
    $.tmpl = tmpl
  }

})(this)

//------------------- 引擎模板 模块 -------------------