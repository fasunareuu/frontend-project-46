import { readFileSync } from 'node:fs';
import formatter from '../src/formats/index.js';

import {diffEngine} from '../src/index.js';
import parser from '../src/parser.js';

const stylishResult = readFileSync('__fixtures__/expected.stylish.txt', 'utf-8');
const plainResult = readFileSync('__fixtures__/expected.plain.txt', 'utf-8');
const jsonResult = readFileSync('__fixtures__/expected.json.txt', 'utf-8');

test('testing stylish nested', () => {
  expect(diffEngine('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(stylishResult);
  expect(diffEngine('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(stylishResult);
  expect(diffEngine('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toEqual(stylishResult);
});

test('testing plain nested', () => {
  expect(diffEngine('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toEqual(plainResult);
  expect(diffEngine('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain')).toEqual(plainResult);
  expect(diffEngine('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'plain')).toEqual(plainResult);
});

test('testing json nested', () => {
  expect(diffEngine('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toEqual(jsonResult);
  expect(diffEngine('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json')).toEqual(jsonResult);
  expect(diffEngine('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'json')).toEqual(jsonResult);
});

test('should be errors', () => {
  expect(() => (parser('randomdata', 'whoops'))).toThrow('not supported!');
  expect(() => (formatter('randomdata', 'whoops'))).toThrow('not supported!');
});
