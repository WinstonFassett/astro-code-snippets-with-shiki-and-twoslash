// @filename: node_modules/@types/mylib/index.d.ts
export function doit(): string;

// @filename: index.ts
import { doit } from 'mylib';
console.log(doit);
