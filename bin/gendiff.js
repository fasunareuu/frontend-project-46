#!/usr/bin/env node
import { program } from 'commander';
import { fs } from 'file-system';
import * as parser from './parser.js';
import diff from './getDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((path1, path2) => {
    const file1 = JSON.parse(fs.readFileSync(parser.resolvePath(path1), { encoding: 'utf-8' }));
    const file2 = JSON.parse(fs.readFileSync(parser.resolvePath(path2), { encoding: 'utf-8' }));
    console.log(diff(file1, file2));
  });
program.parse();
