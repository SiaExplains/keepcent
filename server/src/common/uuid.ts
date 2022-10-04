const rndNibble = (): number => (Math.random() * 16) | 0;
const rndHex = (char: string): string =>
  (char === 'x' ? rndNibble() : (rndNibble() & 0x3) | 0x8).toString(16);
const uuid = (): string => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, rndHex);

export { uuid };