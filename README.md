# gatsby-plugin-marksale

Easily add MARKSALE® to your Gatsby site.

## Install

`npm i gatsby-plugin-marksale`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-marksale`,
    options: {
      clientAlias: 'YOUR_MARKSALE_CLIENT_ALIAS',
      // Include in development.
      includeInDevelopment: false
    }
  }
];
```
