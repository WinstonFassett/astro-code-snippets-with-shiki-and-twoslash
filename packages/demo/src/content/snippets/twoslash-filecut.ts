// @filename: a.ts
export const helloWorld: string = 'Hi';

// @filename: b.ts
// ---cut---
import { helloWorld } from './a';
console.log(helloWorld);
