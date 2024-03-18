import path from 'path'

export const resolvePath = (filePath) => path.resolve(process.cwd(), filePath);