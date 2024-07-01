type Thing = { name: string };
const thing: Thing = { name: 'thing' };
const o = { thing };
function someFunction(options: typeof o) {
  return o.thing.name;
}
