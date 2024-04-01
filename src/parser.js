// import path from 'path'
// import { fs } from 'file-system'

// export const resolvePath = filePath => path.resolve(process.cwd(), filePath)
// export const getFile = (file) => fs.readFileSync(file, { encoding: 'utf-8' });

// export const getObject = (str) => JSON.parse(str);

import yaml from 'js-yaml';

const parser = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return yaml.load(data);
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Format ${format} is not supported!`);
  }
};

export default parser;