"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/Users/christiankehres/Projects/gatsby-plugins/gatbsy-plugin-marksale/src/gatsby-ssr.js";

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPreBodyComponents = _ref.setPreBodyComponents;

  if (process.env.NODE_ENV === "production" || pluginOptions.includeInDevelopment) {
    return setPreBodyComponents([_react.default.createElement("script", {
      key: "gatsby-plugin-marksale",
      dangerouslySetInnerHTML: {
        __html: "(function (m, a, r, k, s, l, e) {\n            m.mso = s;\n            (m[s] =\n            m[s] ||\n            function () {\n                (m[s].q = m[s].q || []).push(arguments);\n            }),\n            (m[s].l = 1 * new Date());\n            l = a.createElement(r);\n            e = a.getElementsByTagName(r)[0];\n            l.async = 1;\n            l.src = k;\n            e.parentNode.insertBefore(l, e);\n        }(window, document, 'script', 'https://" + pluginOptions.clientAlias + ".marksale.de/marksaleSnippet.js', 'marksaleAnalytics'));"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })]);
  }
};