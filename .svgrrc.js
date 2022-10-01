const indexTemplate = require('./template');

module.exports = {
  typescript: true,
  indexTemplate,
  icon: true,
  svgo: true,
  replaceAttrValues: {
    '#374151': 'currentColor',
    '#4A5568': 'currentColor',
    '#111827': 'currentColor',
    '#4B5563': 'currentColor',
  },
};
