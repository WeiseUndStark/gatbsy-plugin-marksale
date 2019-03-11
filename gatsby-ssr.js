'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  if (process.env.NODE_ENV === 'production') {
    return setHeadComponents([_react2.default.createElement('script', {
      key: 'gatsby-plugin-marksale',
      dangerouslySetInnerHTML: {
        __html: '(function (m, a, r, k, s, l, e) {\n            m.mso = s;\n            (m[s] =\n            m[s] ||\n            function () {\n                (m[s].q = m[s].q || []).push(arguments);\n            }),\n            (m[s].l = 1 * new Date());\n            l = a.createElement(r);\n            e = a.getElementsByTagName(r)[0];\n            l.async = 1;\n            l.src = k;\n            e.parentNode.insertBefore(l, e);\n        }(window, document, \'script\', \'https://' + pluginOptions.clientAlias + '.marksale.de/marksaleSnippet.js\', \'marksaleAnalytics\'));'
      }
    })]);
  }
};