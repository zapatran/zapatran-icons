const path = require('path');

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const indexTemplate = files => {
  const exportEntries = files.map(file => {
    const parentFolder = path.basename(path.dirname(file));
    const basename = path.basename(file, path.extname(file));
    return `export { default as ${basename}${capitalize(parentFolder)} } from './${basename}';`;
  });
  return exportEntries.join('\n') + '\n';
};

module.exports = indexTemplate;
