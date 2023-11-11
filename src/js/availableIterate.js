export default function availableIterate(obj) {
  return obj !== null && typeof obj[Symbol.iterator] === 'function';
}
