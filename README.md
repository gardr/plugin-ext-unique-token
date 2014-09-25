# Garðr Unique Token Plugin

[![Build Status](https://api.travis-ci.org/gardr/plugin-ext-unique-token.png?branch=master)](https://travis-ci.org/gardr/plugin-ext-unique-token)
[![Dependency Status](https://david-dm.org/gardr/plugin-ext-unique-token.png)](https://david-dm.org/gardr/plugin-ext-unique-token)
[![devDependency Status](https://david-dm.org/gardr/plugin-ext-unique-token/dev-status.png)](https://david-dm.org/gardr/plugin-ext-unique-token#info=devDependencies)


Replaces the string GARDR_UNIQUE_ID with timestamp + position id to get unique URLs

If you have multiple banners with the same position name, you might want to generate the banner URL once for all the
positions. When the URL is the same it might load from the browser cache even when setting correct no-cache headers.
By using the token GARDR_UNIQUE_ID in the url and this plugin, the token will be replaced with a timestamp and the id
of the banner (which is different for each with the same name).

## Install

    npm install gardr-plugin-ext-unique-token --save

## Use
In your ext bundle file:

```javascript
    var gardrExt = require('gardr-ext');
    var uniqueToken = require('gardr-plugin-ext-unique-token');

    gardrExt.plugin(uniqueToken);

    module.exports = gardrExt;
```
