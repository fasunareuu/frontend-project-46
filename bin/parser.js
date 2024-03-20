import path from 'path';

const resolvePath = (filePath) => path.resolve(process.cwd(), filePath);

export default resolvePath;
