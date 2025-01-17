const {isNil, castArray} = require('lodash');

module.exports = ({assets, message, doPush}) => ({
  assets: isNil(assets)
    ? ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
    : assets
    ? castArray(assets)
    : assets,
  message,
  doPush: isNil(doPush) ? true : doPush,
});
