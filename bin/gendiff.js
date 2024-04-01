#!/usr/bin/env node
import { program } from 'commander';
import { diffEngine, getFullPath } from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2 ) => {
    console.log(diffEngine(getFullPath(filepath1), getFullPath(filepath2), program.opts().format));
  });
program.parse();
