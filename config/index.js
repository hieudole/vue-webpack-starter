'use strict'

const path = require('path');

module.exports = {
    dev: {
        assetsSubDirectory: 'assets',
        assetsPublicPath: '/',
    },
    build: {
        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),

        assetsSubDirectory: 'assets',
        assetsPublicPath: '/',
    }
}