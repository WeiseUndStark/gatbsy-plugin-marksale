import React from 'react';

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      <script
        key={`gatsby-plugin-marksale`}
        dangerouslySetInnerHTML={{
          __html: `(function (m, a, r, k, s, l, e) {
            m.mso = s;
            (m[s] =
            m[s] ||
            function () {
                (m[s].q = m[s].q || []).push(arguments);
            }),
            (m[s].l = 1 * new Date());
            l = a.createElement(r);
            e = a.getElementsByTagName(r)[0];
            l.async = 1;
            l.src = k;
            e.parentNode.insertBefore(l, e);
        }(window, document, 'script', 'https://${
          pluginOptions.clientAlias
        }.marksale.de/marksaleSnippet.js', 'marksaleAnalytics'));`
        }}
      />
    ]);
  }
};
